
import React, { useEffect, useContext, useState } from 'react';
import { Card, Tabs } from 'react-bootstrap';
import DexieUtils from '../../utils/dexie-utils';
import NotyfContext from '../../contexts/NotyfContext';
import Tab from 'react-bootstrap/Tab';
import { ExamModel } from '../exams/ExamsForm';
import Unscored from './EssayTable';
import { QuestionModel } from '../questions/QuestionsForm';
import { ExamResultsModel } from '../../pages/_studentspages/exams/TakeExam';
import EssayTable from './EssayTable';

// Props interface for the EssayScoring component.
interface EssayScoringProps {
    setSelectedRow: (model: ExamModel | undefined) => void;
}

// The main EssayScoring component.
const EssayScoring: React.FC<EssayScoringProps> = ({ setSelectedRow }) => {
    // State variables to hold exam and exam result data.
    const [exams, setExams] = useState<ExamModel[]>([]);
    const [examResults, setExamResults] = useState<ExamResultsModel[]>([]);
    // Creating Dexie utility instances for various data models.
    const [dexieUtils] = useState(DexieUtils<ExamModel>({ tableName: 'exams' }));
    const [examResultsDexieUtils] = useState(DexieUtils<ExamResultsModel>({ tableName: 'examresults' }));
    const [questionDexieUtils] = useState(DexieUtils<QuestionModel>({ tableName: 'questions' }));

    // Fetch exam results when the component mounts.
    useEffect(() => {
        const fetchData = async () => {
            await getExamResults();
        };
        fetchData();
    }, []);

    // Fetch exams whenever examResults state changes.
    useEffect(() => {
        const fetchData = async () => {
            await getExams();
        };
        fetchData();
    }, [examResults]);

    // Function to fetch exam results from the database.
    const getExamResults = async () => {
        await examResultsDexieUtils.getAll().then(setExamResults);
    };

    // Function to fetch exams and process essay questions.
    const getExams = async () => {
        // Fetch all exams from the database.
        const fetchedExams = await dexieUtils.getAll();
        const essays = [];

        // Process essay questions for each fetched exam.
        for (const exam of fetchedExams) {
            const selectedQuestions = [];

            if (exam.selectedQuestions) {
                for (const ans of exam.selectedQuestions) {
                    const questionDetails = await questionDexieUtils.get(ans.id);
                    const questionType = questionDetails ? questionDetails.questionType : null;

                    // Filter and include only essay type questions.
                    if (questionType === 'essay') {
                        selectedQuestions.push({
                            ...ans,
                            questionType
                        });
                    }
                }

                essays.push({
                    ...exam,
                    selectedQuestions
                });
            }
        }

        // Filter out exams with no essay questions.
        const filteredEssays = essays.filter(exam => {
            return exam.selectedQuestions?.some(question => question.questionType === 'essay');
        });

        // Process data for each exam with essay questions.
        const examsWithData = filteredEssays.map(exam => {
            const essayQuestionIds = filteredEssays.filter(fe => fe.id === exam.id).flatMap(essay => essay.selectedQuestions
                .filter(sq => sq.questionType === 'essay')
                .map(sq => sq.id)
            );

            // Filter exam results based on essay question IDs.
            const filteredExamResults = examResults.filter(result => result.examId === exam.id &&
                result.answers.some(answer => essayQuestionIds.includes(answer.questionId))
            );

            // Filter and count scored and unscored essay answers.
            const essayAnswers = filteredExamResults.filter(f => f.examId === exam.id).flatMap(result =>
                result.answers.filter(answer => essayQuestionIds.includes(answer.questionId))
            );
            const totalScored = essayAnswers.filter(tea => tea.score && tea.score > 0).length;
            const totalEssays = essayAnswers.filter(tea => !tea.score).length;

            return {
                ...exam,
                progress: { totalScored, totalEssays } // Set questionsCount property
            };
        });

        setExams(examsWithData as ExamModel[]);
    };

    // Rendering the component.
    return (
        <Card>
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4>Exams</h4>
                    <div className='d-flex gap-1'>
                    </div>
                </div>
            </Card.Header>
            {/* Render tabs for displaying scored and unscored exams */}
            <Tabs
                defaultActiveKey="unscored"
                id="essayScoringTabs"
                className="mb-3 mt-2"
            >
                <Tab eventKey="unscored" title="Unscored / Partially scored">
                    {/* Render Unscored component with relevant data */}
                    <EssayTable data={exams.filter(f => f.progress?.totalScored !== undefined && f.progress.totalScored < f.progress?.totalEssays)} />
                </Tab>
                <Tab eventKey="fullyScored" title="Fully scored">
                    <EssayTable data={exams.filter(f => f.progress?.totalScored !== undefined && f.progress.totalScored === f.progress?.totalEssays)} />
                </Tab>
            </Tabs>
        </Card>
    );
};

export default EssayScoring;
