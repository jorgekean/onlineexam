export type User = {
  id: string;
  displayName: string;
  userName: string;
  mobile: string;
  email: string;
  password: string;
  moreDetails: string;
  avatar: File | any;
  role: 'schooladmin' | 'teacher' | 'student';
};
