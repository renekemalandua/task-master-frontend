import { createBrowserRouter, Navigate, Outlet, RouterProvider} from "react-router-dom";
import { Login } from "./pages/login/page";
import { Dashbord } from "./pages/dashbord/page";
import { Users } from "./pages/users/page";
import { Tasks } from "./pages/tasks/page";
import { Roles } from "./pages/roles/page";
import { NavBar } from "./components/navbar/navbar";
import { LeftBar } from "./components/leftbar/leftbar";
import React from "react"
import Profile from "./pages/profile/page";


const currentUser = true;

const ProtectedRoutes: React.FC<{children: React.ReactNode}>  = ({children}) =>{
  if(!currentUser){
    return <Navigate to="/login"/>
  }
  return children;
}

function Layout(){

  return(
    <div>
        <NavBar/>
        <div style={{display:"flex"}}>
          <LeftBar/>
          <div style={{flex: 6}}>
            <Outlet/>
          </div>
        </div>
    </div>
  )
}  

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoutes>
        <Layout/>
      </ProtectedRoutes>
    ),
    children:[
      {
        path: "/",
        element: <Dashbord/>
      },
      {
        path: "/users",
        element: <Users/>
      },
      {
        path: "/tasks",
        element: <Tasks/>
      },
      {
        path: "/roles",
        element: <Roles/>
      },
      {
        path: "/profile/:id",
        element: <Profile/>
      },
    ]
  },
  {
    path: "/login",
    element: <Login/>
  }
]);


export function App() {
  return <RouterProvider router={router} />
}