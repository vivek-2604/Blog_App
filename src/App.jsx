import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Card from "./components/Card/Card";
import PostCard from "./components/CreatPost/PostCard";
import RootLayout from "./Pages/Root";
import Login from "./components/Login/login";
import CreatForm from "./components/CreatPost/createForm";
import DetailPage from "./components/CreatPost/DetailPost";
import ErrorPage from "./Pages/ErrorPage";
import ProtectedRoute from "./Pages/ProtectedRoute";

const loginUser = JSON.parse(localStorage.getItem("loginData"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <RootLayout />
      </ProtectedRoute>
    ),
    // errorElement: <ErrorPage />,
    children: [
      {
        index: "/",
        element: (
          <ProtectedRoute>
            <PostCard />
          </ProtectedRoute>
        ),
      },
      {
        path: ":id",
        element: (
          <ProtectedRoute>
            <DetailPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "explore_post",
        element: (
          <ProtectedRoute>
            <Card />
          </ProtectedRoute>
        ),
      },
      {
        path: "creat_post",
        element: (
          <ProtectedRoute>
            <CreatForm />
          </ProtectedRoute>
        ),
      },
    ],
  },
  { path: "login", element: <Login /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
