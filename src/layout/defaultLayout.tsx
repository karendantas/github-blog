import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
import { LayoutBody } from "./styles";



export function Layout (){
    return (
        <> 
            <Header/>

            <LayoutBody>
                <Outlet />
            </LayoutBody>
        </>
        
    )
}