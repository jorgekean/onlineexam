import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useTable, usePagination, TableOptions, useFilters, useGlobalFilter, useRowSelect, useSortBy } from "react-table";

import {
    Card,
    Container,
    Table,
    Pagination,
    Row,
    Col,
    Form,
    Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faSort, faSortUp, faSortDown, faExclamationCircle, faRemove, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";
import { htmlToText } from "html-to-text";

import defaultAvatar from "../../assets/img/avatars/default.png"
import { removeHTMLTags } from "../../utils/utils";

// Define a custom type extending the TableOptions interface with onDelete and onEdit props
interface CustomTableOptions<D extends object> extends TableOptions<D> {
    onDelete?: (rowData: D) => void;
    onEdit?: (rowData: D) => void;
    onView?: (rowData: D) => void;
    onSelectedItemsChange?: (items: []) => void;
    showCheckboxSelection?: boolean;
    useDangerouslySetInnerHTM?: boolean;
}

// Filtering
// This is a custom filter UI for selecting
// a unique option from a list
export function SelectColumnFilter({
    column: { filterValue, setFilter, preFilteredRows, id },
}: {
    column: any;
}) {
    // Calculate the options for filtering
    // using the preFilteredRows
    const options = React.useMemo(() => {
        const options = new Set();
        preFilteredRows.forEach((row: any) => {
            options.add(row.values[id]);
        });
        return [...options.values()];
    }, [id, preFilteredRows]);

    // Render a multi-select box
    return (
        <Form.Select
            value={filterValue}
            onChange={(e: any) => {
                setFilter(e.target.value || undefined);
            }}
        >
            <option value="">All</option>
            {options.map((option: any, i: any) => (
                <option key={i} value={option}>
                    {option}
                </option>
            ))}
        </Form.Select>
    );
}

export function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
}: {
    column: any;
}) {
    const count = preFilteredRows.length;

    return (
        <Form.Control
            value={filterValue || ""}
            onChange={(e) => {
                setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
            }}
            placeholder={`Search ${count} records...`}
            className="mt-2"
        />
    );
}
//

// Row Selection
const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }: { indeterminate?: any; }, ref) => {
        const defaultRef = React.useRef<any>();
        const resolvedRef: any = ref || defaultRef;

        React.useEffect(() => {
            resolvedRef.current.indeterminate = indeterminate;
        }, [resolvedRef, indeterminate]);

        return (
            <>
                <input type="checkbox" ref={resolvedRef} {...rest} />
            </>
        );
    }
);
//

const MyTable = (props: CustomTableOptions<Record<string, unknown>>) => {
    const { columns, data, onDelete, onEdit, onView, onSelectedItemsChange, showCheckboxSelection, useDangerouslySetInnerHTM } = props;

    // filtering
    const defaultColumn = React.useMemo(
        () => ({
            // Let's set up our default Filter UI
            Filter: DefaultColumnFilter,
        }),
        []
    );
    const filterTypes = React.useMemo(
        () => ({
            // Or, override the default text filter to use
            // "startWith"
            text: (rows: any, id: any, filterValue: any) => {
                return rows.filter((row: any) => {
                    const rowValue = row.values[id];
                    return rowValue !== undefined
                        ? String(rowValue)
                            .toLowerCase()
                            .startsWith(String(filterValue).toLowerCase())
                        : true;
                });
            },
        }),
        []
    );
    //

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        selectedFlatRows,
        state: { pageIndex, pageSize, selectedRowIds },
        toggleAllRowsSelected,
        toggleRowSelected,
        getToggleRowSelectedProps
    } = useTable(
        {
            columns,
            data,
            initialState: {
                pageIndex: 0,
                hiddenColumns: ['id', 'selected'],
                selectedRowIds: data.map(item => item.selected) as unknown as Record<string, boolean>
            },
            defaultColumn, // Be sure to pass the defaultColumn option
            filterTypes,
        },
        useFilters, // useFilters!
        useGlobalFilter, // useGlobalFilter!
        useSortBy,
        usePagination,
        useRowSelect,
        (hooks) => {
            hooks.visibleColumns.push((columns) => {
                const columnsWithSelection = [
                    // ... other columns
                    {
                        id: "selection",
                        Header: ({ getToggleAllRowsSelectedProps }: { getToggleAllRowsSelectedProps: any }) => (
                            <div>
                                <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
                            </div>
                        ),
                        Cell: ({ row }: { row: any }) => (
                            <div>
                                {/* {console.log(row, "row")} */}
                                <IndeterminateCheckbox {...row.getToggleRowSelectedProps()}
                                // checked={row.values.selected}
                                // onChange={() => toggleCheckbox(row.original.id, !row.values.selected)}
                                />
                            </div>
                        ),
                    },
                    ...columns,
                ];

                return showCheckboxSelection ? columnsWithSelection : columns;
            });
        }
    );
    // useEffect(() => {
    //     // Update the 'selected' property of each object in the 'data' array
    //     // data.forEach(d => {
    //     //     d.selected = selectedFlatRows.some((row: any) => row.original.id === d.id);
    //     // });
    //     console.log(selectedFlatRows, data, "selectedFlatRows")
    // }, [data, selectedFlatRows]);

    // // Use the selectedRowIds state to set initial checked values
    // const initialSelectedRowIds = data.reduce(
    //     (acc, row) => {
    //         if (row.selected) {
    //             acc[row.id] = true;
    //         }
    //         return acc;
    //     },
    //     {} as Record<number, boolean>
    // );
    // useEffect(() => {
    //     // Extract the IDs of the initially selected rows
    //     const initiallySelectedRows = data
    //         .filter((row) => row.selected)
    //         .map((row) => row);

    //     console.log(data, "ta")

    //     // Call toggleAllRowsSelected to set the initial selected rows
    //     // toggleAllRowsSelected(false);
    //     toggleRowSelected('52d19bde-3663-459d-8529-bab88ce4676e', true);
    // }, [data, toggleRowSelected]);   

    // useEffect(() => {
    //     const fetchData = async () => {

    //         const initiallySelected = data.filter(f => f.selected)
    //         console.log(initiallySelected.map(x => x.id), selectedRowIds, "rowids selected")
    //         if (onSelectedItemsChange) {
    //             onSelectedItemsChange(initiallySelected as [])
    //         }
    //     };
    //     fetchData();
    // }, [])

    useEffect(() => {
        const fetchData = async () => {
            // console.log(selectedFlatRows, "es")
            if (onSelectedItemsChange && showCheckboxSelection) {
                onSelectedItemsChange(selectedFlatRows as [])
            }
        };
        fetchData();
    }, [selectedFlatRows, showCheckboxSelection]);



    return (
        <React.Fragment>
            {
                data.length !== 0 ?
                    <Table striped hover {...getTableProps()}>
                        <thead>
                            {headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                            {column.render("Header")}
                                            {/* Conditionally render the sort direction indicator */}
                                            {!column.disableSortBy && (
                                                <span>
                                                    {column.isSorted ? (
                                                        column.isSortedDesc ? (
                                                            <FontAwesomeIcon icon={faSortDown} className="ms-2" />
                                                        ) : (
                                                            <FontAwesomeIcon icon={faSortUp} className="ms-2" />
                                                        )
                                                    ) : (
                                                        <FontAwesomeIcon icon={faSort} className="ms-2" />
                                                    )}
                                                </span>
                                            )}
                                            <div>
                                                {column.canFilter && column.filter ? column.render("Filter") : null}
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {page.map((row: any, i: any) => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map((cell: any) => {
                                            return (

                                                <td {...cell.getCellProps()} className={cell.column.id === "button" || cell.column.Header === "" ? 'text-end' : ''}>
                                                    {
                                                        cell.column.id === "avatar"
                                                            ?
                                                            <img
                                                                src={cell.value || defaultAvatar}
                                                                width="32"
                                                                height="32"
                                                                className="rounded-circle my-n1"
                                                                alt="Avatar"
                                                            />
                                                            : useDangerouslySetInnerHTM && cell.column.id !== "selection" && cell.column.id !== "status" ? ( // Check if htmlToPlainText is provided                                                                 

                                                                <span title={htmlToText(cell.value)}>{htmlToText(cell.value)}</span>  // Apply htmlToPlainText if it's not undefined
                                                            ) : (
                                                                cell.render('Cell') // Render the cell as it is if htmlToPlainText is not provided
                                                            )}
                                                </td>
                                            );
                                        })}

                                        {onEdit || onDelete || onView ? (
                                            <td className="d-flex justify-content-end">
                                                {/* Edit and Delete Buttons */}
                                                <React.Fragment>
                                                    {onView && (
                                                        <Button className="me-1 d-flex justify-content-center align-items-center" variant="primary" onClick={() => onView(row.original)}>
                                                            <FontAwesomeIcon icon={faEye} />
                                                        </Button>
                                                    )}
                                                    {onEdit && (
                                                        <Button className="me-1" onClick={() => onEdit(row.original)}>
                                                            <FontAwesomeIcon icon={faEdit} />
                                                        </Button>
                                                    )}
                                                    {onDelete && (
                                                        <Button className="me-1" variant="danger" onClick={() => onDelete(row.original)}>
                                                            <FontAwesomeIcon icon={faTrash} />
                                                        </Button>
                                                    )}

                                                </React.Fragment>
                                            </td>
                                        ) : null}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                    :
                    <>
                        <Table>
                            <thead>
                                {headerGroups.map((headerGroup, ix) => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map((column) => (
                                            <th {...column.getHeaderProps()}>
                                                {column.render("Header")}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                        </Table>
                        <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
                            <FontAwesomeIcon icon={faExclamationCircle} style={{ marginRight: '8px' }} size="3x" className="text-warning" />
                            <div>No Available Data!</div>
                        </div>
                    </>
            }


            {/* Only show Pagination if data is more than 10 */}
            {
                data.length > 10 &&
                <Row>
                    <Col md="6">
                        <span className="mx-2">
                            Page{" "}
                            <strong>
                                {pageIndex + 1} of {pageOptions.length}
                            </strong>
                        </span>
                        <span className="ms-3 me-2">Show:</span>
                        <Form.Select
                            className="d-inline-block w-auto"
                            value={pageSize}
                            onChange={(e: any) => {
                                setPageSize(Number(e.target.value));
                            }}
                        >
                            {[10, 20, 30, 40, 50].map((pageSize) => (
                                <option key={pageSize} value={pageSize}>
                                    {pageSize}
                                </option>
                            ))}
                        </Form.Select>

                        <span className="ms-3 me-2">Go to page:</span>
                        <Form.Control
                            className="d-inline-block"
                            type="number"
                            defaultValue={pageIndex + 1}
                            onChange={(e) => {
                                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                                gotoPage(page);
                            }}
                            style={{ width: "75px" }}
                        />
                    </Col>
                    <Col md="6">
                        <Pagination className="float-end">
                            <Pagination.First
                                onClick={() => gotoPage(0)}
                                disabled={!canPreviousPage}
                            />
                            <Pagination.Prev
                                onClick={() => previousPage()}
                                disabled={!canPreviousPage}
                            />
                            <Pagination.Next
                                onClick={() => nextPage()}
                                disabled={!canNextPage}
                            />
                            <Pagination.Last
                                onClick={() => gotoPage(pageCount - 1)}
                                disabled={!canNextPage}
                            />
                        </Pagination>
                    </Col>
                </Row>
            }

        </React.Fragment >
    );
};

export default MyTable;
