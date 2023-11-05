import faker from "faker";

import mock from "./adapter";

import { User } from "../types/user";
import { verify, sign } from "../utils/jwt";
import { StudentModel } from "../components/students/StudentsForm";
import DexieUtils from "../utils/dexie-utils";
import { useState } from "react";
import Dexie from "dexie";
import schoolAvatar from "../assets/img/school-logo.png";
import avatar1 from "../assets/img/avatars/avatar.jpg";
import avatar2 from "../assets/img/avatars/avatar-2.jpg";
import avatar3 from "../assets/img/avatars/avatar-3.jpg";
import avatar4 from "../assets/img/avatars/avatar-4.jpg";
import avatar5 from "../assets/img/avatars/avatar-5.jpg";


const JWT_SECRET = "super-secret-key";
const JWT_EXPIRES_IN = "3 days";
// ../../assets / img / school - logo.png
const users: User[] = [
  {
    id: "a8553063-7bd5-45ed-adbe-db6f069a3802",
    displayName: "School Admin",
    userName: "school-admin",
    mobile: "0917-123-4567",
    email: "school-admin@eksam.ph",
    password: "@SCHOOLADMIN",
    moreDetails: "Oversees school operations, coordinates with stakeholders, and leads decision-making.",
    avatar: schoolAvatar,
    role: 'schooladmin'
  },
  {
    id: "a8553063-7bd5-45ed-adbe-db6f069a3202",
    displayName: "TEACHER1",
    userName: "teacher1",
    mobile: "0920-987-6543",
    email: "teacher1@eksam.ph",
    password: "@TEACHER1",
    moreDetails: "Passionate math educator, creates engaging lessons, and supports students individually.",
    avatar: avatar1,
    role: 'teacher'
  },
  {
    id: "a8553063-7bd5-45fd-adbe-db6f069a3202",
    displayName: "TEACHER2",
    userName: "teacher2",
    mobile: "0935-876-5432",
    email: "teacher2@eksam.ph",
    password: "@TEACHER2",
    moreDetails: "Dedicated language arts teacher, fosters communication skills through creative teaching.",
    avatar: avatar2,
    role: 'teacher'
  },
  {
    id: "a8553063-7bd5-45fd-adbe-db6f069c3208",
    displayName: "STUDENT1",
    userName: "student1",
    mobile: "0946-234-5678",
    email: "student@eksam.ph",
    password: "@STUDENT01",
    moreDetails: "Enthusiastic learner, science club participant, aspiring scientist.",
    avatar: avatar3,
    role: 'student'
  },
  {
    id: "a8553067-7bd5-45fd-adbe-db6f069c3208",
    displayName: "STUDENT2",
    userName: "student2",
    mobile: "0955-567-8901",
    email: "student2@eksam.ph",
    password: "@STUDENT02",
    moreDetails: "Art lover, showcases creativity in painting and drawing.",
    avatar: avatar4,
    role: 'student'
  },
  {
    id: "a8553062-1bd5-45fd-adbe-db6f069c3208",
    displayName: "STUDENT3",
    userName: "student3",
    mobile: "0966-789-0123",
    email: "student3@eksam.ph",
    password: "@STUDENT03",
    moreDetails: "Sports enthusiast, excels in basketball, shows leadership.",
    avatar: avatar5,
    role: 'student'
  },
  {
    id: "a8553063-7bd5-45ed-adbe-db6f069d3802",
    displayName: "Student 1",
    userName: "student1",
    mobile: "0977-345-6789",
    email: "student1@eksam.io",
    password: "1",
    moreDetails: "Tech-savvy coder, participates in coding competitions.",
    avatar: avatar5,
    role: 'student'
  },
  {
    id: "a8553063-7bd5-45ed-adbe-db6f063a3202",
    displayName: "Student 2",
    userName: "student2",
    mobile: "0988-901-2345",
    email: "student2@eksam.ph",
    password: "2",
    moreDetails: "Community-focused volunteer, initiates social service projects.",
    avatar: avatar4,
    role: 'student'
  }
];

// const studentUsers: User[] = [
//   {
//     id: "a8553063-7bd5-45ed-adbe-db6f069d3802",
//     displayName: "Student 1",
//     email: "student1@eksam.io",
//     password: "1",
//     avatar: "/src/assets/img/avatars/avatar.jpg",
//     role: 'student'
//   },
//   {
//     id: "a8553063-7bd5-45ed-adbe-db6f063a3202",
//     displayName: "Student 2",
//     email: "student2@eksam.ph",
//     password: "2",
//     avatar: "/src/assets/img/avatars/avatar-2.jpg",
//     role: 'student'
//   }
// ];

function fakeRequest(time: number) {
  return new Promise((res) => setTimeout(res, time));
}

const getStudents = async () => {
  const db = new Dexie('candidates');
  db.version(10).stores({
    myStore: 'candidates',
  });

  try {
    console.log(db, 'db');
    await db.open();
    const data = db.table('candidates');
    console.log(db, 'Retrieved data:', data);
    // Process the retrieved data here
  } catch (error) {
    console.error('Error retrieving data:', error);
  }
};

mock.onPost("/api/auth/sign-in").reply(async (config) => {
  try {
    await fakeRequest(400);
    // const [dexieUtils] = useState(DexieUtils<StudentModel>({ tableName: 'students' }));

    // const allStudents = await getStudents()


    const { email, password } = JSON.parse(config.data);
    let user = users.find((_user) => _user.email === email);

    // if (!user) {
    //   // var student = studentUsers.find((_user) => _user.email === email);
    //   // if (student) {
    //   //   user = {
    //   //     avatar: '',
    //   //     displayName: student.displayName,
    //   //     email: student.email,
    //   //     role: 'student',
    //   //     id: faker.datatype.uuid(),
    //   //     password: student.password
    //   //   }
    //   // }
    // }

    if (!user) {
      return [
        400,
        { message: "There is no user corresponding to the email address." },
      ];
    }

    if (user.password !== password) {
      return [400, { message: "Incorrect password" }];
    }

    const accessToken = sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    return [200, { accessToken, user }];
  } catch (error) {
    console.error(error);
    return [500, { message: "Internal server error" }];
  }
});

mock.onPost("/api/auth/sign-up").reply(async (config) => {
  try {
    await fakeRequest(400);

    const { email, password, firstName, lastName } = JSON.parse(config.data);
    let user = users.find((_user) => _user.email === email);

    if (user) {
      return [
        400,
        {
          message:
            "There already exists an account with the given email address.",
        },
      ];
    }

    user = {
      id: faker.datatype.uuid(),
      displayName: `${firstName} ${lastName}`,
      email,
      userName: '',
      mobile: '',
      moreDetails: '',
      password,
      avatar: null,
      role: 'teacher'
    };

    const accessToken = sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    return [200, { accessToken, user }];
  } catch (error) {
    console.error(error);
    return [500, { message: "Internal server error" }];
  }
});

mock.onGet("/api/auth/my-account").reply((config) => {
  try {
    const { Authorization } = config.headers!;

    if (!Authorization) {
      return [401, { message: "Authorization token missing" }];
    }

    const accessToken = (Authorization as string).split(" ")[1];
    const data = verify(accessToken, JWT_SECRET);
    const userId = typeof data === "object" ? data?.userId : "";
    const user = users.find((_user) => _user.id === userId);

    if (!user) {
      return [401, { message: "Invalid authorization token" }];
    }

    return [200, { user }];
  } catch (error) {
    console.error(error);
    return [500, { message: "Internal server error" }];
  }
});
