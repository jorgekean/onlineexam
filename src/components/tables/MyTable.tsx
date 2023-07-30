import React from "react";
import { Helmet } from "react-helmet-async";
import { useTable, usePagination, TableOptions } from "react-table";

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
import { faEdit, faExclamationCircle, faRemove, faTrash } from "@fortawesome/free-solid-svg-icons";

import defaultAvatar from "../../assets/img/avatars/default.png"

// Define a custom type extending the TableOptions interface with onDelete and onEdit props
interface CustomTableOptions<D extends object> extends TableOptions<D> {
    onDelete?: (rowData: D) => void;
    onEdit?: (rowData: D) => void;
    useDangerouslySetInnerHTM?: boolean;
}

const MyTable = (props: CustomTableOptions<Record<string, unknown>>) => {
    const { columns, data, onDelete, onEdit, useDangerouslySetInnerHTM } = props;

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
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
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0 },
        },
        usePagination
    );

    return (
        <React.Fragment>
            {
                data.length !== 0 ?
                    <Table striped hover {...getTableProps()}>
                        <thead>
                            {headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps()}>
                                            {column.render("Header")}
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
                                                <td {...cell.getCellProps()}>
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
                                                            : useDangerouslySetInnerHTM ? ( // Check if htmlToPlainText is provided
                                                                <div dangerouslySetInnerHTML={{ __html: cell.value }} />  // Apply htmlToPlainText if it's not undefined
                                                            ) : (
                                                                cell.render('Cell') // Render the cell as it is if htmlToPlainText is not provided
                                                            )}
                                                </td>
                                            );
                                        })}

                                        {onEdit || onDelete ? (
                                            <td className="d-flex justify-content-end">
                                                {/* Edit and Delete Buttons */}
                                                <React.Fragment>
                                                    {onEdit && (
                                                        <Button className="me-1" onClick={() => onEdit(row.original)}>
                                                            <FontAwesomeIcon icon={faEdit} />
                                                        </Button>
                                                    )}
                                                    {onDelete && (
                                                        <Button variant="danger" onClick={() => onDelete(row.original)}>
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
                    <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
                        <FontAwesomeIcon icon={faExclamationCircle} style={{ marginRight: '8px' }} size="3x" className="text-warning" />
                        <div>No Available Data!</div>
                    </div>
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

        </React.Fragment>
    );
};

export default MyTable;
