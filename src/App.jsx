import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Registration from "./components/pages/Registration";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Layout from "./components/Layout";
import Chat from "./components/pages/Chat";




const App = () => {

     const router = createBrowserRouter(
     createRoutesFromElements(
     <Route>
     <Route path="/registration"element={<Registration/>}></Route>
     <Route path="/login"element={<Login/>}></Route>
     <Route path="/" element={<Layout/>}>
     <Route index element={<Home />}></Route>
     <Route path="/chat" element={<Chat />}></Route>

     </Route>
     </Route>
      ));

    return <RouterProvider router={router}/>;
};

export default App;