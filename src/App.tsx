import React, { Suspense, useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import { Provider } from "react-redux";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { store } from "./redux/store";

import "./i18n";
import routes from "./routes";

import Loader from "./components/Loader";

import ThemeProvider from "./contexts/ThemeProvider";
import SidebarProvider from "./contexts/SidebarProvider";
import LayoutProvider from "./contexts/LayoutProvider";
import ChartJsDefaults from "./utils/ChartJsDefaults";

import AuthProvider from "./contexts/JWTProvider";
// import AuthProvider from "./contexts/Auth0Provider";
// import AuthProvider from "./contexts/CognitoProvider";

import { myAppConfig } from "./config";
import { SubjecModel } from "./components/subjects/SubjectForm";
import DexieUtils from "./utils/dexie-utils";
import { StudentModel } from "./components/students/StudentsForm";
import { examInitialData, questionInitialData, sectionInitialData, subjectInitialData, StudentInitialData, notificationInitialData, teacherInitialData, directionInitialData, ExamResultInitialData } from "./initialdata";
import { SectionModel } from "./components/sections/SectionsForm";
import { QuestionModel } from "./components/questions/QuestionsForm";
import { ExamModel } from "./components/exams/ExamsForm";
import { NotificationModel } from "./components/notifications/NotificationsForm";
import { TeacherModel } from "./components/teacher/TeacherForm";
import { DirectionModel } from "./components/directions/DirectionsForm";
import { ExamResultsModel } from "./pages/_studentspages/exams/TakeExam";


const App = () => {
  const content = useRoutes(routes);

  // seed initial data
  const [subjectDexieUtils] = useState(DexieUtils<SubjecModel>({ tableName: 'subjects' }));
  const [sectionDexieUtils] = useState(DexieUtils<SectionModel>({ tableName: 'sections' }));
  const [questionDexieUtils] = useState(DexieUtils<QuestionModel>({ tableName: 'questions' }));
  const [examDexieUtils] = useState(DexieUtils<ExamModel>({ tableName: 'exams' }));
  const [studentsDexieUtils] = useState(DexieUtils<StudentModel>({ tableName: 'students' }));
  const [notificationDexieUtils] = useState(DexieUtils<NotificationModel>({ tableName: 'notifications' }));
  const [teacherDexieUtils] = useState(DexieUtils<TeacherModel>({ tableName: 'teachers' }));
  const [directionDexieUtils] = useState(DexieUtils<DirectionModel>({ tableName: 'directions' }));
  const [examHistoryDexieUtils] = useState(DexieUtils<ExamResultsModel>({ tableName: 'examresults' }));

  useEffect(() => {
    const fetchData = async () => {
      await loadInitialData()
    };
    fetchData();
  }, [])

  const loadInitialData = async () => {
    // Subject
    const subjectData = await subjectDexieUtils.getAll()
    if (!(subjectData && subjectData.length > 0)) {
      const initialData = subjectInitialData

      initialData.forEach(async (data) => {
        const id = await subjectDexieUtils.addWithId(data);
        console.log('Added successfully with id:', id);
      });
    }
    // end - Subject

    // Sections
    const sectionData = await sectionDexieUtils.getAll()
    if (!(sectionData && sectionData.length > 0)) {
      const initialData = sectionInitialData

      initialData.forEach(async (data) => {
        const id = await sectionDexieUtils.addWithId(data);
        console.log('Added successfully with id:', id);
      });
    }
    // end - Sections

    // Questions
    const questionData = await questionDexieUtils.getAll()
    if (!(questionData && questionData.length > 0)) {
      const initialData = questionInitialData

      initialData.forEach(async (data) => {
        const id = await questionDexieUtils.addWithId(data);
        console.log('Added successfully with id:', id);
      });
    }
    // end - Questions

    // Exams
    const examData = await examDexieUtils.getAll()
    if (!(examData && examData.length > 0)) {
      const initialData = examInitialData

      initialData.forEach(async (data) => {
        const id = await examDexieUtils.addWithId(data);
        console.log('Added successfully with id:', id);
      });
    }
    // end - Exams


    // students
    const studentData = await studentsDexieUtils.getAll()
    if (!(studentData && studentData.length > 0)) {
      const initialData = StudentInitialData

      initialData.forEach(async (data) => {
        const id = await studentsDexieUtils.addWithId(data);
        console.log('Added successfully with id:', id);
      });
    }
    // end - students


    // notifications
    const notificationData = await notificationDexieUtils.getAll()
    if (!(notificationData && notificationData.length > 0)) {
      const initialData = notificationInitialData

      initialData.forEach(async (data) => {
        const id = await notificationDexieUtils.addWithId(data);
        console.log('Added successfully with id:', id);
      });
    }
    // end - notifications

    // teachers
    const teacherData = await teacherDexieUtils.getAll()
    if (!(teacherData && teacherData.length > 0)) {
      const initialData = teacherInitialData

      initialData.forEach(async (data) => {
        const id = await teacherDexieUtils.addWithId(data);
        console.log('Added successfully with id:', id);
      });
    }
    // end - teachers

    // directions
    const directionData = await directionDexieUtils.getAll()
    if (!(directionData && directionData.length > 0)) {
      const initialData = directionInitialData

      initialData.forEach(async (data) => {
        const id = await directionDexieUtils.addWithId(data);
        console.log('Added successfully with id:', id);
      });
    }
    // end - directions

        const examHistoryData = await examHistoryDexieUtils.getAll()
    if (!(examHistoryData && examHistoryData.length > 0)) {
      const initialData = ExamResultInitialData

      initialData.forEach(async (data) => {
        const id = await examHistoryDexieUtils.addWithId(data);
        console.log('Added successfully with id:', id);
      });  
  }

  }
  // end - seed initial data

  return (
    <HelmetProvider>
      <Helmet
        titleTemplate={"%s | " + myAppConfig.appTitle}
        defaultTitle={myAppConfig.appTitle}
      />
      <Suspense fallback={<Loader />}>
        <Provider store={store}>
          <ThemeProvider>
            <SidebarProvider>
              <LayoutProvider>
                <ChartJsDefaults />
                <AuthProvider>{content}</AuthProvider>
              </LayoutProvider>
            </SidebarProvider>
          </ThemeProvider>
        </Provider>
      </Suspense>
    </HelmetProvider>
  );
};

export default App;
