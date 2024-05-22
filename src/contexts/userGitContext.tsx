
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

export interface userPostsType {
    id: string,
    number: number,
    title: string,
    body: string,
    comments: number,
    created_at: string
}

interface userGitContextProps {
    userGit: userGitType;
    userPosts: userPostsType[];
}
export const userGitContext = createContext({} as userGitContextProps);


interface UserGitContextProviderProps {
    children: ReactNode;
}

export function UserGitContextProvider( {children} : UserGitContextProviderProps){
    const [userGit, setUserGit] = useState({} as userGitType);
    const [userPosts, setUserPosts] =  useState<userPostsType[]>([]);


    async function fetchGitHubUser(){
        try{

            const response = await apiUser.get('/karendantas');
            setUserGit(response.data);

        }catch(error){
            console.log(error)
        }
        
    }

    async function fetchGitHubUserPost(){   
        try{

            const response = await apiPosts.get('/karendantas/github-blog/issues')
            setUserPosts(response.data);

        }catch(error){
            console.log(error)
        }
    }

    useEffect( () => {
        fetchGitHubUser();
        fetchGitHubUserPost();
    }, []);

    return (
        <userGitContext.Provider value = {{userGit, userPosts}}>
            {children}
        </userGitContext.Provider>
    )
}