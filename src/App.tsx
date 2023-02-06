import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./pages/LandingPage/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
