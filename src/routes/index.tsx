import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Layout } from "../layout/defaultLayout";

export function Router (){

    return (
       <Routes>
            <Route path="/" element = {<Layout />}>
                <Route path = "/" element = {<Home/>} />
            </Route>
       </Routes>
    )
}