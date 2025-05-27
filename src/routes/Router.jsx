import { createBrowserRouter, RouterProvider } from "react-router";
import CharactersList from "../pages/CharactersList";
import Character from "../pages/Character";



const router = createBrowserRouter([
  {
    path:"/", element: <CharactersList/>
  },
  {
    path:"/:id", element: <Character/>
  },
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;
