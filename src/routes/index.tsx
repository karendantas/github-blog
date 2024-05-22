import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Layout } from "../layout/defaultLayout";
import { PostDetail } from "../pages/postDetail";

export function Router (){

    return (
       <Routes>
            <Route path="/" element = {<Layout />} >
                <Route path = "/" element = {<Home/>} />
                <Route path="/post/:number" element = {<PostDetail/>} />
            </Route>
       </Routes>
    )
}