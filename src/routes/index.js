import MainPage from "../pages/MainPage/MainPage";
import ModeratorPage from "../pages/ModeratorPage/ModeratorPage";
import UserPage from "../pages/UserPage/UserPage";

export const moderRoutes = [
    {path: '/moder', element: ModeratorPage},
    {path: '/userpage',element: UserPage  }

]
export const publicRoutes = [
    {path: '/', element: MainPage}
]
export const userRoutes = [
    {path: '/userpage',element: UserPage  }
]