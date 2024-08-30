import { createBrowserRouter } from "react-router-dom";
import Pokemons from "./views/Pokemons";
import Pokemon from "./views/Pokemon";
import GridExample from "./components/GridExample";

const RoutesConfig = createBrowserRouter([
  {
    path: "/",
    element: <Pokemons />,
  },
  {
    path: "/pokemon/:id",
    element: <Pokemon />,
  },
  {
    path: "/gridexample",
    element: <GridExample />,
  },
]);

export default RoutesConfig;
