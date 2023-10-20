import MainPage from "../pages/MainPage/MainPage";
import ModeratorPage from "../pages/ModeratorPage/ModeratorPage";
import UserPage from "../pages/UserPage/UserPage";
import Registration from "../pages/Registration/RegistrationPage";

export const moderRoutes = [
    {path: '/moder', element: ModeratorPage},
    {path: '/userpage',element: UserPage  }

]
export const publicRoutes = [
    {path: '/', element: MainPage},
    {path: '/registration', element: Registration}
]
export const userRoutes = [
    {path: '/userpage',element: UserPage  }
]