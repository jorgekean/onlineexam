// Make sure id is unique for each table
// We can use integer as id on the seed data ex: 1, 2, 3, etc

import { AnswerModel, QuestionModel } from "./components/questions/QuestionsForm"
import { SectionModel } from "./components/sections/SectionsForm"
import { SubjecModel } from "./components/subjects/SubjectForm"
import { ExamModel } from "./components/exams/ExamsForm"
import { DirectionModel } from "./components/directions/DirectionsForm"
import { TeacherModel } from "./components/teacher/TeacherForm"
import { StudentModel } from "./components/students/StudentsForm"
import { NotificationModel } from "./components/notifications/NotificationsForm"
import { ExamResultsModel } from "./pages/_studentspages/exams/TakeExam"
import { idea } from "react-syntax-highlighter/dist/esm/styles/hljs"



export const ExamResultInitialData: ExamResultsModel[] = [
    {
        id: "1", examResultId: "01", examId: "6e41b329-fc20-4d7a-93dd-78fa9cab1809", examName: "Math Quiz 1", userId: "a8553063-7bd5-45fd-adbe-db6f069c3208",
        userDisplayName: "Michael Cruz", totalCorrectAnswers: 2, totalQuestions: 3, accuracyRatio: 33.333, result: "Passed", duration: 15, startDateAndTime: "Aug 12 2023, 06:33:53 PM",
        endDate: new Date(), progress: '94', answers: [{ questionId: "12", questionText: "string", userAnswer: "any", status: "string", isCorrect: true }]
    },

    {
        id: "2", examResultId: "02", examId: "0b3a7a1f-ab56-4512-843a-6cd16b1b4298", examName: "Science Quiz 1", userId: "a8553067-7bd5-45fd-adbe-db6f069c3208",
        userDisplayName: "John Doe", totalCorrectAnswers: 1, totalQuestions: 3, accuracyRatio: 33.333, result: "Failed", duration: 15, startDateAndTime: "Aug 05 2023, 09:22:45 AM",
        endDate: new Date(), progress: '67', answers: [{ questionId: "12", questionText: "string", userAnswer: "any", status: "string", isCorrect: true }]
    },
    {
        id: "3", examResultId: "03", examId: "dc520ef1-0189-4b4d-8405-b3bb827689d5", examName: "Language Quiz 1", userId: "a8553062-1bd5-45fd-adbe-db6f069c3208",
        userDisplayName: "Maria Ruiz", totalCorrectAnswers: 3, totalQuestions: 3, accuracyRatio: 66.666, result: "Failed", duration: 60, startDateAndTime: "Aug 08 2023, 02:25:31 PM",
        endDate: new Date(), progress: '88', answers: [{ questionId: "12", questionText: "", userAnswer: "", status: "", isCorrect: true }]
    },
    {
        id: "4", examResultId: "04", examId: "dc520ef1-0189-4b4d-8405-b3bb827689d5", examName: "Language Quiz 1", userId: "a8553067-7bd5-45fd-adbe-db6f069c3208",
        userDisplayName: "Francine Mercado", totalCorrectAnswers: 0, totalQuestions: 3, accuracyRatio: 0, result: "Failed", duration: 15, startDateAndTime: "Aug 05 2023, 09:22:45 AM",
        endDate: new Date(), progress: '45', answers: [{ questionId: "12", questionText: "string", userAnswer: "any", status: "string", isCorrect: true }]
    },
]


export const StudentInitialData: StudentModel[] = [
    {
        id: "a8553067-7bd5-45fd-adbe-db6f069c3208",
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@gmail.com",
        userName: "doejohn",
        password: "",
        studentSubjects: [{ value: "English", label: "English" }],
        mobile: "1234567890",
        uniqueIdentification: "UMID",
        uniqueIdentificationNumber: "1234567890",
        referenceId: "",
        specialNeeds: "",
        moreDetails: "",
        active: "",
        sendCredentials: true,
        displayName: "John",
        ExamCount: "5",
        AverageScores: '90',
        LastExam: '08/20/2023',
        TimeTaken: "60",

    },
    {
        id: "a8553063-7bd5-45fd-adbe-db6f069c3208",
        firstName: "Michael",
        lastName: "Cruz",
        email: "michaelcruz@gmail.com",
        userName: "michaelcruz",
        password: "",
        studentSubjects: [{ value: "Science", label: "Science" }],
        mobile: "123456789",
        uniqueIdentification: "TIN",
        uniqueIdentificationNumber: "123456789",
        referenceId: "",
        specialNeeds: "",
        moreDetails: "",
        active: "",
        sendCredentials: true,
        displayName: "michael",
        ExamCount: "3",
        AverageScores: '85',
        LastExam: '08/21/2023',
        TimeTaken: "60",
    },
    {
        id: "a8553062-1bd5-45fd-adbe-db6f069c3208",
        firstName: "Maria",
        lastName: "Ruiz",
        email: "mariaruiz@gmail.com",
        userName: "mariaruiz",
        password: "",
        studentSubjects: [{ value: "Math", label: "Mathematics" }],
        mobile: "123456789",
        uniqueIdentification: "UMID",
        uniqueIdentificationNumber: "123456789",
        referenceId: "",
        specialNeeds: "",
        moreDetails: "",
        active: "",
        sendCredentials: true,
        displayName: "maria",
        ExamCount: "1",
        AverageScores: "91",
        LastExam: '08/22/2023',
        TimeTaken: "60",
    }
]


export const notificationInitialData: NotificationModel[] = [
    { id: "1", notificationText: "This is notification 1", dateCreated: "Aug 02 2023, 10:43:57 AM", subjectText: "Notification 1" },
    { id: "2", notificationText: "This is notification 2", dateCreated: "Aug 03 2023, 07:59:36 AM", subjectText: "Notification 2" },
    { id: "3", notificationText: "This is notification 3", dateCreated: "Aug 05 2023, 09:22:33 AM", subjectText: "Notification 3    " },

]

export const subjectInitialData: SubjecModel[] = [
    { id: "1", students: "3", subject: "Math", description: "Mathematics" },
    { id: "2", students: "5", subject: "Science", description: "Science" },
    { id: "3", students: "7", subject: "English", description: "English" },
]

export const sectionInitialData: SectionModel[] = [
    { id: "1", sectionName: "Section 1", sectionPath: "Section 1" },
    { id: "2", sectionName: "Section 2", sectionPath: "Section 2" },
    { id: "3", sectionName: "Section 3", sectionPath: "Section 3" },
]

export const directionInitialData: DirectionModel[] = [
    {
        id: "1",
        directionName: "Book Review",
        direction: `You may refer to the Franklin & Rabin casebook, your class notes, a dictionary, and any
                    outlines you have prepared yourself or with other students in the course. You may not refer
                    to any commercial study aids or hornbooks. `
    },
    {
        id: "2",
        directionName: "Template",
        direction: `Leave a left-margin of at least one inch on every page of your answers. If you are
                    handwriting your answers, please write in bluebooks on every other line and on only one
                    side of the page. If you are typing, please double space.` },
    {
        id: "3",
        directionName: "Finals",
        direction: `There are 9 pages and 2 questions in this exam. You must answer both questions one and
                    two. `
    },
]

export const teacherInitialData: TeacherModel[] = [
    {
        id: "1",
        firstName: "Maria",
        lastName: "Santos",
        email: "maria.santos@example.com",
        userName: "msantos_teacher",
        password: "securepassword",
        teacherSubjects: [{ value: "English", label: "English" }],
        mobile: "0912-345-6789",
        uniqueIdentification: "Professional License",
        uniqueIdentificationNumber: "PRC123456",
        referenceId: "TCH-001",
        specialNeeds: "None",
        moreDetails: "Passionate educator with over 10 years of experience. Dedicated to nurturing a love for learning among students. Conducting workshops on integrating technology in teaching.",
        active: 'true',
        sendCredentials: true,
        displayName: "Maria Santos"
    },
    {
        id: "2",
        firstName: "Ramon",
        lastName: "Garcia",
        email: "ramon.garcia@example.com",
        userName: "rgarcia_teacher",
        password: "strongpass123",
        teacherSubjects: [{ value: "Math", label: "Mathematics" }],
        mobile: "0921-987-6543",
        uniqueIdentification: "Professional License",
        uniqueIdentificationNumber: "PRC789012",
        referenceId: "TCH-002",
        specialNeeds: "None",
        moreDetails: "An advocate for student-centered education. Enthusiastic about incorporating Filipino culture and history into the curriculum. Leading community service projects to instill values of social responsibility.",
        active: 'true',
        sendCredentials: true,
        displayName: "Ramon Garcia"
    },
    {
        id: "3",
        firstName: "Elena",
        lastName: "Lopez",
        email: "elena.lopez@example.com",
        userName: "elopez_teacher",
        password: "securePass!23",
        teacherSubjects: [{ value: "Science", label: "Science" }],
        mobile: "0945-123-4567",
        uniqueIdentification: "Professional License",
        uniqueIdentificationNumber: "PRC987654",
        referenceId: "TCH-003",
        specialNeeds: "None",
        moreDetails: "A language enthusiast with a focus on English and Filipino literature. Organizing literary events and promoting language proficiency among students. Guiding debate and speech clubs.",
        active: 'false',
        sendCredentials: false,
        displayName: "Elena Lopez"
    }
]

export const questionInitialData: QuestionModel[] =
    [
        {
            "id": "1",
            "questionType": "fillInTheBlank",
            "questionTypeDesc": "Fill in the Blank",
            "section": "Science",
            "questionText": "<p>Study of living things ?</p>",
            "choices": [
                {
                    "answerText": "Biology",
                    "isCorrect": true,
                    "id": ""
                }
            ],
            "explanation": "",
            "status": "Published"
        },
        {
            "id": "2",
            "questionType": "multipleChoiceRadio",
            "questionTypeDesc": "Multiple Choice (Radio)",
            "section": "Science",
            "questionText": "<p>What causes the tides?</p>",
            "choices": [
                {
                    "answerText": "Gravitational pull of the moon",
                    "isCorrect": true,
                    "id": ""
                },
                {
                    "answerText": "Earth's rotation",
                    "isCorrect": false,
                    "id": ""
                },
                {
                    "answerText": "Wind currents",
                    "isCorrect": false,
                    "id": ""
                },
                {
                    "answerText": "Sun's heat",
                    "isCorrect": false,
                    "id": ""
                }
            ],
            "explanation": "",
            "status": "Published"
        },
        {
            "id": "3",
            "questionType": "fillInTheBlank",
            "questionTypeDesc": "Fill in the Blank",
            "section": "Science",
            "questionText": "<p>Process by which plants make their own food?</p>",
            "choices": [
                {
                    "answerText": "Photosynthesis",
                    "isCorrect": true,
                    "id": ""
                }
            ],
            "explanation": "",
            "status": "Published"
        },
        {
            "id": "4",
            "questionType": "trueOrFalse",
            "questionTypeDesc": "True or False",
            "section": "Science",
            "questionText": "<p>Viruses are considered living organisms.</p>",
            "choices": [
                {
                    "answerText": "false",
                    "isCorrect": true,
                    "id": ""
                }
            ],
            "explanation": "",
            "status": "Published"
        },
        {
            "id": "5",
            "questionType": "essay",
            "questionTypeDesc": "Essay (Evaluated by Teacher)",
            "section": "Science",
            "questionText": "<p>Explain the process of cell division.</p>",
            "choices": [
                {
                    "answerText": "",
                    "isCorrect": true,
                    "id": ""
                }
            ],
            "explanation": "",
            "status": "Published"
        },
        {
            "id": "6",
            "questionType": "trueOrFalse",
            "questionTypeDesc": "True or False",
            "section": "Science",
            "questionText": "<p>The Earth's inner core is liquid.</p>",
            "choices": [
                {
                    "answerText": "false",
                    "isCorrect": true,
                    "id": ""
                }
            ],
            "explanation": "",
            "status": "Published"
        },
        {
            "id": "7",
            "questionType": "multipleChoiceRadio",
            "questionTypeDesc": "Multiple Choice (Radio)",
            "section": "Science",
            "questionText": "<p>What is the largest planet in our solar system?</p>",
            "choices": [
                {
                    "answerText": "Jupiter",
                    "isCorrect": true,
                    "id": ""
                },
                {
                    "answerText": "Saturn",
                    "isCorrect": false,
                    "id": ""
                },
                {
                    "answerText": "Mars",
                    "isCorrect": false,
                    "id": ""
                },
                {
                    "answerText": "Neptune",
                    "isCorrect": false,
                    "id": ""
                }
            ],
            "explanation": "",
            "status": "Published"
        },
        {
            "id": "8",
            "questionType": "essay",
            "questionTypeDesc": "Essay (Evaluated by Teacher)",
            "section": "Science",
            "questionText": "<p>Discuss the importance of biodiversity.</p>",
            "choices": [
                {
                    "answerText": "",
                    "isCorrect": true,
                    "id": ""
                }
            ],
            "explanation": "",
            "status": "Published"
        },
        {
            "id": "9",
            "questionType": "trueOrFalse",
            "questionTypeDesc": "True or False",
            "section": "Science",
            "questionText": "<p>Light travels faster than sound.</p>",
            "choices": [
                {
                    "answerText": "true",
                    "isCorrect": true,
                    "id": ""
                }
            ],
            "explanation": "",
            "status": "Published"
        },
        {
            "id": "10",
            "questionType": "fillInTheBlank",
            "questionTypeDesc": "Fill in the Blank",
            "section": "Math",
            "questionText": "<p>3 + 3 = __________.</p>",
            "choices": [
                {
                    "answerText": "6",
                    "isCorrect": true,
                    "id": ""
                }
            ],
            "explanation": "",
            "status": "Published"
        },
        {
            "id": "11",
            "questionType": "multipleChoiceRadio",
            "questionTypeDesc": "Multiple Choice (Radio)",
            "section": "Math",
            "questionText": "<p>If a triangle has two sides of equal length, it is called a/an _________ triangle.</p>",
            "choices": [
                {
                    "answerText": "Isosceles",
                    "isCorrect": true,
                    "id": ""
                },
                {
                    "answerText": "Equilateral",
                    "isCorrect": false,
                    "id": ""
                },
                {
                    "answerText": "Scalene",
                    "isCorrect": false,
                    "id": ""
                },
                {
                    "answerText": "Right",
                    "isCorrect": false,
                    "id": ""
                }
            ],
            "explanation": "",
            "status": "Published"
        },
        {
            "id": "12",
            "questionType": "fillInTheBlank",
            "questionTypeDesc": "Fill in the Blank",
            "section": "Math",
            "questionText": "<p>The area of a circle is calculated using the formula A = πr^2, where r is the _________ of the circle.</p>",
            "choices": [
                {
                    "answerText": "radius",
                    "isCorrect": true,
                    "id": ""
                }
            ],
            "explanation": "",
            "status": "Published"
        },
        {
            "id": "13",
            "questionType": "trueOrFalse",
            "questionTypeDesc": "True or False",
            "section": "Math",
            "questionText": "<p>A prime number is divisible by any number other than 1 and itself.</p>",
            "choices": [
                {
                    "answerText": "false",
                    "isCorrect": true,
                    "id": ""
                }
            ],
            "explanation": "",
            "status": "Published"
        },
        {
            "id": "14",
            "questionType": "essay",
            "questionTypeDesc": "Essay (Evaluated by Teacher)",
            "section": "Math",
            "questionText": "<p>Explain the concept of slope in mathematics.</p>",
            "choices": [
                {
                    "answerText": "",
                    "isCorrect": true,
                    "id": ""
                }
            ],
            "explanation": "",
            "status": "Published"
        },
        {
            "id": "15",
            "questionType": "trueOrFalse",
            "questionTypeDesc": "True or False",
            "section": "Math",
            "questionText": "<p>The square root of 144 is 12.</p>",
            "choices": [
                {
                    "answerText": "true",
                    "isCorrect": true,
                    "id": ""
                }
            ],
            "explanation": "",
            "status": "Published"
        },
        {
            "id": "16",
            "questionType": "multipleChoiceRadio",
            "questionTypeDesc": "Multiple Choice (Radio)",
            "section": "Math",
            "questionText": "<p>What is the value of 5 x 8?</p>",
            "choices": [
                {
                    "answerText": "40",
                    "isCorrect": true,
                    "id": ""
                },
                {
                    "answerText": "13",
                    "isCorrect": false,
                    "id": ""
                },
                {
                    "answerText": "25",
                    "isCorrect": false,
                    "id": ""
                },
                {
                    "answerText": "56",
                    "isCorrect": false,
                    "id": ""
                }
            ],
            "explanation": "",
            "status": "Published"
        },
        {
            "id": "17",
            "questionType": "essay",
            "questionTypeDesc": "Essay (Evaluated by Teacher)",
            "section": "Math",
            "questionText": "<p>Discuss the concept of probability and its applications.</p>",
            "choices": [
                {
                    "answerText": "",
                    "isCorrect": true,
                    "id": ""
                }
            ],
            "explanation": "",
            "status": "Published"
        },
        {
            "id": "18",
            "questionType": "trueOrFalse",
            "questionTypeDesc": "True or False",
            "section": "Math",
            "questionText": "<p>The sum of the angles in a triangle is always 180 degrees.</p>",
            "choices": [
                {
                    "answerText": "true",
                    "isCorrect": true,
                    "id": ""
                }
            ],
            "explanation": "",
            "status": "Published"
        },
        {
            "id": "19",
            "questionType": "fillInTheBlank",
            "questionTypeDesc": "Fill in the Blank",
            "section": "Language",
            "questionText": "<p><strong>You </strong>are _________?</p>",
            "choices": [
                {
                    "answerText": "Rare",
                    "isCorrect": true,
                    "id": ""
                }
            ],
            "explanation": "",
            "status": "Published"
        },
        {
            "id": "20",
            "questionType": "multipleChoiceRadio",
            "questionTypeDesc": "Multiple Choice (Radio)",
            "section": "Language",
            "questionText": "<p>What is the synonym of 'benevolent'?</p>",
            "choices": [
                {
                    "answerText": "Kind",
                    "isCorrect": true,
                    "id": ""
                },
                {
                    "answerText": "Harsh",
                    "isCorrect": false,
                    "id": ""
                },
                {
                    "answerText": "Cruel",
                    "isCorrect": false,
                    "id": ""
                },
                {
                    "answerText": "Selfish",
                    "isCorrect": false,
                    "id": ""
                }
            ],
            "explanation": "",
            "status": "Published"
        },
        {
            "id": "21",
            "questionType": "fillInTheBlank",
            "questionTypeDesc": "Fill in the Blank",
            "section": "Language",
            "questionText": "<p>A person who writes a book is called an _________.</p>",
            "choices": [
                {
                    "answerText": "author",
                    "isCorrect": true,
                    "id": ""
                }
            ],
            "explanation": "",
            "status": "Published"
        },
        {
            "id": "22",
            "questionType": "trueOrFalse",
            "questionTypeDesc": "True or False",
            "section": "Language",
            "questionText": "<p>The word 'eloquent' means lacking the ability to express oneself clearly.</p>",
            "choices": [
                {
                    "answerText": "false",
                    "isCorrect": true,
                    "id": ""
                }
            ],
            "explanation": "",
            "status": "Published"
        },
        {
            "id": "23",
            "questionType": "essay",
            "questionTypeDesc": "Essay (Evaluated by Teacher)",
            "section": "Language",
            "questionText": "<p>Discuss the impact of literature on society.</p>",
            "choices": [
                {
                    "answerText": "",
                    "isCorrect": true,
                    "id": ""
                }
            ],
            "explanation": "",
            "status": "Published"
        },
        {
            "id": "24",
            "questionType": "trueOrFalse",
            "questionTypeDesc": "True or False",
            "section": "Language",
            "questionText": "<p>A palindrome is a word that is spelled the same way backward and forward.</p>",
            "choices": [
                {
                    "answerText": "true",
                    "isCorrect": true,
                    "id": ""
                }
            ],
            "explanation": "",
            "status": "Published"
        },
        {
            "id": "25",
            "questionType": "multipleChoiceRadio",
            "questionTypeDesc": "Multiple Choice (Radio)",
            "section": "Language",
            "questionText": "<p>What is the correct plural form of 'child'?</p>",
            "choices": [
                {
                    "answerText": "Children",
                    "isCorrect": true,
                    "id": ""
                },
                {
                    "answerText": "Childs",
                    "isCorrect": false,
                    "id": ""
                },
                {
                    "answerText": "Childes",
                    "isCorrect": false,
                    "id": ""
                },
                {
                    "answerText": "Childies",
                    "isCorrect": false,
                    "id": ""
                }
            ],
            "explanation": "",
            "status": "Published"
        },
        {
            "id": "26",
            "questionType": "essay",
            "questionTypeDesc": "Essay (Evaluated by Teacher)",
            "section": "Language",
            "questionText": "<p>Discuss the significance of effective communication skills.</p>",
            "choices": [
                {
                    "answerText": "",
                    "isCorrect": true,
                    "id": ""
                }
            ],
            "explanation": "",
            "status": "Published"
        },
        {
            "id": "29",
            "questionType": "multipleChoiceRadio",
            "questionTypeDesc": "Multiple Choice (Radio)",
            "section": "Language",
            "questionText": "<p>What is the past tense of the verb 'go'?</p>",
            "choices": [
                {
                    "answerText": "Went",
                    "isCorrect": true,
                    "id": ""
                },
                {
                    "answerText": "Gone",
                    "isCorrect": false,
                    "id": ""
                },
                {
                    "answerText": "Going",
                    "isCorrect": false,
                    "id": ""
                },
                {
                    "answerText": "Goes",
                    "isCorrect": false,
                    "id": ""
                }
            ],
            "explanation": "",
            "status": "Published"
        },
        {
            "id": "30",
            "questionType": "trueOrFalse",
            "questionTypeDesc": "True or False",
            "section": "Language",
            "questionText": "<p>A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.</p>",
            "choices": [
                {
                    "answerText": "true",
                    "isCorrect": true,
                    "id": ""
                },
                {
                    "answerText": "false",
                    "isCorrect": false,
                    "id": ""
                }
            ],
            "explanation": "",
            "status": "Published"
        },
        {
            "id": "31",
            "questionType": "fillInTheBlank",
            "questionTypeDesc": "Fill in the Blank",
            "section": "Language",
            "questionText": "<p>The _________ is known for its distinctive black and white stripes.</p>",
            "choices": [
                {
                    "answerText": "zebra",
                    "isCorrect": true,
                    "id": ""
                }
            ],
            "explanation": "",
            "status": "Published"
        }
    ];


export const examInitialData: ExamModel[] = [
    {
        "id": "exam-science-1",
        "examName": "Science Quiz 1",
        "duration": 15,
        "startTime": "9:00",
        "negativeMarks": "doNotApply",
        "questionPicking": 3,
        "selectedQuestions": [
            {
                "id": "1",
                "selected": false,
                "section": "Science",
                "questionTypeDesc": "Fill in the Blank",
                "questionText": "<p>Study of living things ?</p>",
                "status": "Published",
                "questionType": "",
                "choices": [
                    {
                        "answerText": "Biology",
                        "isCorrect": true,
                        "id": "1A"
                    }
                ],
            },
            {
                "id": "2",
                "selected": false,
                "section": "Science",
                "questionTypeDesc": "Multiple Choice (Radio)",
                "questionText": "<p>What causes the tides?</p>",
                "status": "Published",
                "questionType": "",
                "choices": [
                    {
                        "answerText": "Gravitational pull of the moon",
                        "isCorrect": true,
                        "id": "2A"
                    },
                    {
                        "answerText": "Earth's rotation",
                        "isCorrect": false,
                        "id": "2B"
                    },
                    {
                        "answerText": "Wind currents",
                        "isCorrect": false,
                        "id": "2C"
                    },
                    {
                        "answerText": "Sun's heat",
                        "isCorrect": false,
                        "id": "2D"
                    }
                ],
            },
            {
                "id": "3",
                "selected": false,
                "section": "Science",
                "questionTypeDesc": "Fill in the Blank",
                "questionText": "<p>Process by which plants make their own food?</p>",
                "status": "Published",
                "questionType": "",
                "choices": [
                    {
                        "answerText": "Photosynthesis",
                        "isCorrect": true,
                        "id": "3A"
                    }
                ],
            },
            {
                "id": "4",
                "selected": false,
                "section": "Science",
                "questionTypeDesc": "True or False",
                "questionText": "<p>Viruses are considered living organisms.</p>",
                "status": "Published",
                "questionType": "",
                "choices": [
                    {
                        "answerText": "true",
                        "isCorrect": true,
                        "id": "4A"
                    },
                    {
                        "answerText": "false",
                        "isCorrect": false,
                        "id": "4B"
                    }
                ],
            },
            {
                "id": "5",
                "selected": false,
                "section": "Science",
                "questionTypeDesc": "Essay (Evaluated by Teacher)",
                "questionText": "<p>Explain the process of cell division.</p>",
                "status": "Published",
                "questionType": "",
                "choices": []
            },
            {
                "id": "6",
                "selected": false,
                "section": "Science",
                "questionTypeDesc": "True or False",
                "questionText": "<p>The Earth's inner core is liquid.</p>",
                "status": "Published",
                "questionType": "",
                "choices": [
                    {
                        "answerText": "true",
                        "isCorrect": true,
                        "id": "6A"
                    },
                    {
                        "answerText": "false",
                        "isCorrect": false,
                        "id": "6B"
                    }
                ],
            },
            {
                "id": "7",
                "selected": false,
                "section": "Science",
                "questionTypeDesc": "Multiple Choice (Radio)",
                "questionText": "<p>What is the largest planet in our solar system?</p>",
                "status": "Published",
                "questionType": "",
                "choices": [
                    {
                        "answerText": "Jupiter",
                        "isCorrect": true,
                        "id": "7A"
                    },
                    {
                        "answerText": "Saturn",
                        "isCorrect": false,
                        "id": "7B"
                    },
                    {
                        "answerText": "Mars",
                        "isCorrect": false,
                        "id": "7C"
                    },
                    {
                        "answerText": "Neptune",
                        "isCorrect": false,
                        "id": "7D"
                    }
                ],
            },
            {
                "id": "8",
                "selected": false,
                "section": "Science",
                "questionTypeDesc": "Essay (Evaluated by Teacher)",
                "questionText": "<p>Discuss the importance of biodiversity.</p>",
                "status": "Published",
                "questionType": "",
                "choices": []
            },
            {
                "id": "9",
                "selected": false,
                "section": "Science",
                "questionTypeDesc": "True or False",
                "questionText": "<p>Light travels faster than sound.</p>",
                "status": "Published",
                "questionType": "",
                "choices": [
                    {
                        "answerText": "true",
                        "isCorrect": true,
                        "id": "9A"
                    },
                    {
                        "answerText": "false",
                        "isCorrect": false,
                        "id": "9B"
                    }
                ],
            },
            {
                "id": "10",
                "selected": false,
                "section": "Science",
                "questionTypeDesc": "Fill in the Blank",
                "questionText": "<p>Chemical symbol for gold is _________.</p>",
                "status": "Published",
                "questionType": "",
                "choices": [
                    {
                        "answerText": "Au",
                        "isCorrect": true,
                        "id": "10A"
                    }
                ],
            }
            // Add more Science questions here...
        ]
    },
    {
        "id": "exam-math-1",
        "examName": "Math Quiz 1",
        "duration": 20,
        "startTime": "11:00",
        "negativeMarks": "doNotApply",
        "questionPicking": 3,
        "selectedQuestions": [
            {
                "id": "10",
                "selected": false,
                "section": "Math",
                "questionTypeDesc": "Fill in the Blank",
                "questionText": "<p>3 + 3 = __________.</p>",
                "status": "Published",
                "questionType": "",
                "choices": []
            },
            {
                "id": "11",
                "selected": false,
                "section": "Math",
                "questionTypeDesc": "Multiple Choice (Radio)",
                "questionText": "<p>If a triangle has two sides of equal length, it is called a/an _________ triangle.</p>",
                "status": "Published",
                "questionType": "",
                "choices": []
            },
            {
                "id": "12",
                "selected": false,
                "section": "Math",
                "questionTypeDesc": "Fill in the Blank",
                "questionText": "<p>The area of a circle is calculated using the formula A = πr^2, where r is the _________ of the circle.</p>",
                "status": "Published",
                "questionType": "",
                "choices": []
            },
            {
                "id": "13",
                "selected": false,
                "section": "Math",
                "questionTypeDesc": "True or False",
                "questionText": "<p>A prime number is divisible by any number other than 1 and itself.</p>",
                "status": "Published",
                "questionType": "",
                "choices": [
                    {
                        "answerText": "false",
                        "isCorrect": true,
                        "id": "13A"
                    },
                    {
                        "answerText": "true",
                        "isCorrect": false,
                        "id": "13B"
                    }
                ],
            },
            {
                "id": "14",
                "selected": false,
                "section": "Math",
                "questionTypeDesc": "Essay (Evaluated by Teacher)",
                "questionText": "<p>Explain the concept of slope in mathematics.</p>",
                "status": "Published",
                "questionType": "",
                "choices": []
            },
            {
                "id": "15",
                "selected": false,
                "section": "Math",
                "questionTypeDesc": "True or False",
                "questionText": "<p>The square root of 144 is 12.</p>",
                "status": "Published",
                "questionType": "",
                "choices": [
                    {
                        "answerText": "true",
                        "isCorrect": true,
                        "id": "15A"
                    },
                    {
                        "answerText": "false",
                        "isCorrect": false,
                        "id": "15B"
                    }
                ],
            },
            {
                "id": "16",
                "selected": false,
                "section": "Math",
                "questionTypeDesc": "Multiple Choice (Radio)",
                "questionText": "<p>What is the value of 5 x 8?</p>",
                "status": "Published",
                "questionType": "",
                "choices": [
                    {
                        "answerText": "40",
                        "isCorrect": true,
                        "id": "16A"
                    },
                    {
                        "answerText": "13",
                        "isCorrect": false,
                        "id": "16B"
                    },
                    {
                        "answerText": "25",
                        "isCorrect": false,
                        "id": "16C"
                    },
                    {
                        "answerText": "56",
                        "isCorrect": false,
                        "id": "16D"
                    }
                ],
            },
            {
                "id": "17",
                "selected": false,
                "section": "Math",
                "questionTypeDesc": "Essay (Evaluated by Teacher)",
                "questionText": "<p>Discuss the concept of probability and its applications.</p>",
                "status": "Published",
                "questionType": "",
                "choices": []
            },
            {
                "id": "18",
                "selected": false,
                "section": "Math",
                "questionTypeDesc": "True or False",
                "questionText": "<p>The sum of the angles in a triangle is always 180 degrees.</p>",
                "status": "Published",
                "questionType": "",
                "choices": [
                    {
                        "answerText": "true",
                        "isCorrect": true,
                        "id": "18A"
                    },
                    {
                        "answerText": "false",
                        "isCorrect": false,
                        "id": "18B"
                    }
                ],
            },
            {
                "id": "19",
                "selected": false,
                "section": "Math",
                "questionTypeDesc": "Fill in the Blank",
                "questionText": "<p>What is the value of π (pi)?</p>",
                "status": "Published",
                "questionType": "",
                "choices": [
                    {
                        "answerText": "3.14159265359",
                        "isCorrect": true,
                        "id": "19A"
                    }
                ],
            },
            // Add more Math questions here...
        ]
    },
    {
        "id": "exam-language-1",
        "examName": "Language Quiz 1",
        "duration": 30,
        "startTime": "13:00",
        "negativeMarks": "doNotApply",
        "questionPicking": 3,
        "selectedQuestions": [
            {
                "id": "20",
                "selected": false,
                "section": "Language",
                "questionTypeDesc": "Fill in the Blank",
                "questionText": "<p>The _________ jumped over the lazy dog.</p>",
                "status": "Published",
                "questionType": "",
                "choices": [
                    {
                        "answerText": "quick brown fox",
                        "isCorrect": true,
                        "id": "20A"
                    }
                ],
            },
            {
                "id": "21",
                "selected": false,
                "section": "Language",
                "questionTypeDesc": "True or False",
                "questionText": "<p>Shakespeare wrote the play 'Romeo and Juliet.'</p>",
                "status": "Published",
                "questionType": "",
                "choices": [
                    {
                        "answerText": "true",
                        "isCorrect": true,
                        "id": "21A"
                    },
                    {
                        "answerText": "false",
                        "isCorrect": false,
                        "id": "21B"
                    }
                ],
            },
            {
                "id": "22",
                "selected": false,
                "section": "Language",
                "questionTypeDesc": "Multiple Choice (Radio)",
                "questionText": "<p>Which word is a synonym for 'happy'?</p>",
                "status": "Published",
                "questionType": "",
                "choices": [
                    {
                        "answerText": "Joyful",
                        "isCorrect": true,
                        "id": "22A"
                    },
                    {
                        "answerText": "Sad",
                        "isCorrect": false,
                        "id": "22B"
                    },
                    {
                        "answerText": "Angry",
                        "isCorrect": false,
                        "id": "22C"
                    },
                    {
                        "answerText": "Tired",
                        "isCorrect": false,
                        "id": "22D"
                    }
                ],
            },
            {
                "id": "23",
                "selected": false,
                "section": "Language",
                "questionTypeDesc": "Essay (Evaluated by Teacher)",
                "questionText": "<p>Write a short story about an adventurous journey.</p>",
                "status": "Published",
                "questionType": "",
                "choices": []
            },
            {
                "id": "24",
                "selected": false,
                "section": "Language",
                "questionTypeDesc": "Fill in the Blank",
                "questionText": "<p>The _________ is the largest mammal on Earth.</p>",
                "status": "Published",
                "questionType": "",
                "choices": [
                    {
                        "answerText": "blue whale",
                        "isCorrect": true,
                        "id": "24A"
                    }
                ],
            },
            {
                "id": "25",
                "selected": false,
                "section": "Language",
                "questionTypeDesc": "True or False",
                "questionText": "<p>A simile is a figure of speech that compares two unlike things using 'like' or 'as.'</p>",
                "status": "Published",
                "questionType": "",
                "choices": [
                    {
                        "answerText": "true",
                        "isCorrect": true,
                        "id": "25A"
                    },
                    {
                        "answerText": "false",
                        "isCorrect": false,
                        "id": "25B"
                    }
                ],
            },
            {
                "id": "26",
                "selected": false,
                "section": "Language",
                "questionTypeDesc": "Multiple Choice (Radio)",
                "questionText": "<p>What is the opposite of 'victory'?</p>",
                "status": "Published",
                "questionType": "",
                "choices": [
                    {
                        "answerText": "Defeat",
                        "isCorrect": true,
                        "id": "26A"
                    },
                    {
                        "answerText": "Success",
                        "isCorrect": false,
                        "id": "26B"
                    },
                    {
                        "answerText": "Triumph",
                        "isCorrect": false,
                        "id": "26C"
                    },
                    {
                        "answerText": "Achievement",
                        "isCorrect": false,
                        "id": "26D"
                    }
                ],
            },
            {
                "id": "27",
                "selected": false,
                "section": "Language",
                "questionTypeDesc": "Essay (Evaluated by Teacher)",
                "questionText": "<p>Discuss the impact of technology on modern society.</p>",
                "status": "Published",
                "questionType": "",
                "choices": []
            },
            {
                "id": "28",
                "selected": false,
                "section": "Language",
                "questionTypeDesc": "Multiple Choice (Radio)",
                "questionText": "<p>What is the plural form of 'child'?</p>",
                "status": "Published",
                "questionType": "",
                "choices": [
                    {
                        "answerText": "Children",
                        "isCorrect": true,
                        "id": "28A"
                    },
                    {
                        "answerText": "Childs",
                        "isCorrect": false,
                        "id": "28B"
                    },
                    {
                        "answerText": "Childers",
                        "isCorrect": false,
                        "id": "28C"
                    },
                    {
                        "answerText": "Childen",
                        "isCorrect": false,
                        "id": "28D"
                    }
                ],
            },
            {
                "id": "29",
                "selected": false,
                "section": "Language",
                "questionTypeDesc": "Multiple Choice (Radio)",
                "questionText": "<p>What is the past tense of the verb 'go'?</p>",
                "status": "Published",
                "questionType": "",
                "choices": [
                    {
                        "answerText": "Went",
                        "isCorrect": true,
                        "id": "29A"
                    },
                    {
                        "answerText": "Gone",
                        "isCorrect": false,
                        "id": "29B"
                    },
                    {
                        "answerText": "Going",
                        "isCorrect": false,
                        "id": "29C"
                    },
                    {
                        "answerText": "Goes",
                        "isCorrect": false,
                        "id": "29D"
                    }
                ]
            },
            {
                "id": "30",
                "selected": false,
                "section": "Language",
                "questionTypeDesc": "True or False",
                "questionText": "<p>A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.</p>",
                "status": "Published",
                "questionType": "",
                "choices": [
                    {
                        "answerText": "true",
                        "isCorrect": true,
                        "id": "30A"
                    },
                    {
                        "answerText": "false",
                        "isCorrect": false,
                        "id": "30B"
                    }
                ]
            },
            {
                "id": "31",
                "selected": false,
                "section": "Language",
                "questionTypeDesc": "Fill in the Blank",
                "questionText": "<p>The _________ is known for its distinctive black and white stripes.</p>",
                "status": "Published",
                "questionType": "",
                "choices": [
                    {
                        "answerText": "zebra",
                        "isCorrect": true,
                        "id": "31A"
                    }
                ]
            }
            // Add more Language questions here...
        ]
    }
];