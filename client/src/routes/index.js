import GroupsPageContainer from "../pages/GroupsPage/GroupsPageContainer";
import LoginPageContainer from "../pages/LoginPage/LoginPageContainer";
import RegPageContainer from "../pages/RegPage/RegPageContainer";
import SchedulesPageContainer from "../pages/SchedulesPage/SchedulesPageContainer";
import StudentsPageContainer from "../pages/StudentsPage/StudentsPageContainer";
import SubjectsPageContainer from "../pages/SubjectsPage/SubjectsPageContainer";
import TeachersPageContainer from "../pages/TeachersPage/TeachersPageContainer";

export const RouteNames = {
  TEACHERS: "/teachers",
  STUDENTS: "/students",
  SCHEDULES: "/schedules",
  SUBJECTS: "/subjects",
  GROUPS: "/groups",
  LOGIN: "/login",
  REGISTRATION: "/registration",
};

export const publicRoutes = [
  { path: RouteNames.REGISTRATION, element: RegPageContainer },
  { path: RouteNames.LOGIN, element: LoginPageContainer },
];

export const teacherRoutes = [
  { path: RouteNames.TEACHERS, element: TeachersPageContainer },
  { path: RouteNames.SCHEDULES, element: SchedulesPageContainer },
  { path: RouteNames.SUBJECTS, element: SubjectsPageContainer },
  { path: RouteNames.STUDENTS, element: StudentsPageContainer },
  { path: RouteNames.GROUPS, element: GroupsPageContainer },
];
