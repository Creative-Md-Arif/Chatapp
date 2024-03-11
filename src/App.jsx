import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Registration from "./components/pages/Registration";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";




const App = () => {

     const router = createBrowserRouter(
     createRoutesFromElements(
     <Route>
      <Route index element={<Home/>}></Route>
     <Route path="/registration"element={<Registration/>}></Route>
     <Route path="/login"element={<Login/>}></Route>

     </Route>
      
      
      
      ));

    return <RouterProvider router={router}/>;
};

export default App;