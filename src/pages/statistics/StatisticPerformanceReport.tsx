// <FontAwesomeIcon icon={faArrowLeft} />
import { faList, faQuestion, faQuestionCircle, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect, useState, CSSProperties } from 'react';
import { Button, Card, Col, Form, Row, Container } from 'react-bootstrap'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';
import Select from "react-select";
import DexieUtils from '../../utils/dexie-utils';
import NotyfContext from '../../contexts/NotyfContext';
import { SubjecModel } from '../../components/subjects/SubjectForm';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import OverAllPieChart from '../../pages/dashboards/Default/OverAllPieChart';
import OverAllPieChart from '../dashboards/Default/OverAllPieChart';
import StatisticSectionPieChart from '../dashboards/Default/StatisticSectionPieChart';
import StatisticSubjectPieChart from '../dashboards/Default/StatisticSubjectPieChart';
import StudentExamHistory from '../../components/students/StudentExamHistory';

interface StudentsProps {
    // listMode: boolean;
    updateListMode: (mode: boolean) => void;
    updateview: (mode: boolean) => void;
    setSelectedRow: (model: StudentDataModel | undefined) => void;
    student?: StudentDataModel;
    onViewProfile: (mode: boolean) => void;

}

export interface StudentDataModel {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    userName: string;
    password: string;
    studentSubject: string;
    mobile: string;
    uniqueIdentification: string;
    uniqueIdentificationNumber: string;
    referenceId?: string;
    specialNeeds: string;
    moreDetails?: string;
    active: string;
    sendCredentials: boolean;
    displayName: string;
}


const StatisticPerformanceReport: React.FC<StudentsProps> = ({ updateListMode, updateview, setSelectedRow, student, onViewProfile }) => {

    const [listMode, setListMode] = useState<boolean>(true);
    const HandleBack = async () => {
        updateview(true)// show create/edit form             

    }
    const HandleviewProfile = async () => {
        onViewProfile(true)// show profile/list            

    }

    // Initialize the form state with default values
    const initialFormState: StudentDataModel = {
        id: student ? student.id : '',
        displayName: student ? student.displayName : '',
        firstName: student ? student.firstName : '',
        lastName: student ? student.lastName : '',
        email: student ? student.email : '',
        userName: student ? student.userName : '',
        password: student ? student.password : '',
        studentSubject: student ? student.studentSubject : '',
        mobile: student ? student.mobile : '',
        uniqueIdentification: student ? student.uniqueIdentification : '',
        uniqueIdentificationNumber: student ? student.uniqueIdentificationNumber : '',
        specialNeeds: student ? student.specialNeeds : 'false',
        active: student ? student.active : 'true',
        sendCredentials: student ? student.sendCredentials : false,
        referenceId: student ? student.referenceId : '',
        moreDetails: student ? student.moreDetails : ''
    };

    const [formState, setFormState] = useState<StudentDataModel>(initialFormState);
    const [dexieUtils] = useState(DexieUtils<StudentDataModel>({ tableName: 'students' }));
    const [subjectDexieUtils] = useState(DexieUtils<SubjecModel>({ tableName: 'subjects' }));
    const notyf = useContext(NotyfContext);
    // Add a state to track errors for each form field
    const [errors, setErrors] = useState<Partial<StudentDataModel>>({});
    const [subjectOptions, setSubjectOptions] = useState<{ value: string, label: string }[]>([]);

    const [students, setStudents] = useState<StudentDataModel[]>([]);

    useEffect(() => {
        const fetchData = async () => {

            const subjects = await subjectDexieUtils.getAll();

            // Map subjects to options with value and label attributes
            const options = subjects.map(({ subject, description }) => ({
                value: subject,
                label: `${subject} - ${description}`,
            }));
            setSubjectOptions(options)
        };
        fetchData();
    }, []);




    // Handle changes in form inputs and update the form state
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type, required } = event.target;

        // Special handling for checkboxes
        let fieldValue = type === 'radio' ? ((event.target as HTMLInputElement).value) : value;
        let checked: boolean
        if (type === 'checkbox') {
            checked = (event.target as HTMLInputElement).checked
        }

        setFormState((prevState) => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : fieldValue,
        }));

        // Validate the form field and update the error state
        if (required && !fieldValue) {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: 'Required!' }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
        }
    };

    const onSave = async () => {
        // Perform the add operation using DexieUtils
        const id = await dexieUtils.add(formState);
        console.log('Added successfully with id:', id);
    }
    const onUpdate = async () => {
        // Perform the update operation using DexieUtils
        await dexieUtils.update(formState);
        console.log('Updated successfully with id:', formState.id);
    }

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            if (student) {
                onUpdate()
            } else {
                onSave()
            }

            // Optionally, you can clear the form after adding
            setFormState(initialFormState);

            // Show a success message
            notyf.open({
                background: "#4BBF73",
                message: "Students saved!",
                position: {
                    x: "right",
                    y: "bottom"
                }
            })

            // go back to list
            updateListMode(true)
        } catch (error) {
            console.error('Error adding student:', error);
            // Do error handling here...
        }
    };

    const optionsIdentification = [
        { value: "driverLicence", label: "Driver's License" },
        { value: "umid", label: "UMID" },
        { value: "voterId", label: "Voter's ID" },
    ];

    return (
        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <h4>Performance Report</h4>
                    </div>

                    <div className='d-flex gap-1'>
                        <Button onClick={() => { HandleBack(); HandleviewProfile(); }}><FontAwesomeIcon icon={faArrowLeft} /> Back</Button>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <Tabs
                    defaultActiveKey="sectionWise"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="sectionWise" title="Section Wise">
                        <StatisticSectionPieChart />
                    </Tab>
                    <Tab eventKey="subjectWise" title="Subject Wise">
                        {/* <StudentExamHistory
                            updateListMode={updateListMode}
                            setSelectedRow={setSelectedRow}
                            updateview={updateview}
                        /> */}
                        <StatisticSubjectPieChart />
                    </Tab>
                </Tabs>
            </Card.Body>
        </Card>

    )
}

export default StatisticPerformanceReport


