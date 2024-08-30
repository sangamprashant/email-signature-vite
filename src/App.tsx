import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FrameLayout } from "./Components/Frame";
import { ManageHome } from "./Components/Home";
import { AppProvider } from "./context";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ManageHome />,
    },
    {
      path: "/editor",
      element: <FrameLayout />,
    },
  ]);

  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
};

export default App;
