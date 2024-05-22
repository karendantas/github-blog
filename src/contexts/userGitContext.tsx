
import { createContext, ReactNode, useEffect, useState } from "react"
import { apiPosts, apiUser } from "../lib/axios";


interface userGitType {
    name: string,
    login: string,
    bio: string,
    followers: number,
    company: string,
    avatar_url: string,
}

interface userPosts {
    title: string,
    body: string,
    comments: number,
    created_at: string
}

interface datapost {
    data: userPosts
}
interface data {
    data: userGitType
}
interface userGitContextProps {
    userGit: userGitType;
}
export const userGitContext = createContext({} as userGitContextProps);


interface UserGitContextProviderProps {
    children: ReactNode;
}

export function UserGitContextProvider( {children} : UserGitContextProviderProps){
    const [userGit, setUserGit] = useState({} as userGitType);


    async function fetchGitHubUser(){
        try{

            const response = await apiUser.get('/karendantas');
            
            console.log(response)
           
            
            setUserGit(response.data);
        }catch(error){
            console.log(error)
        }
        
    }

    // async function fetchGitHubUserPost(){   
    //     const response = await apiPosts.get('/karendantas/github-blog/issues/1')
    //     if (response){
    //         setUserPosts(response);
    //     }
    // }

    useEffect( () => {
        fetchGitHubUser();
    }, []);

    return (
        <userGitContext.Provider value = {{userGit}}>
            {children}
        </userGitContext.Provider>
    )
}