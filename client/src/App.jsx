import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/homePages/Home";
import Register from "./pages/authPages/Register";
import Login from "./pages/authPages/Login";
import OAuthSuccess from "./pages/authPages/OAuthSuccess";

function App() {
  const appRouter = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/oauth-success",
      element: <OAuthSuccess />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
