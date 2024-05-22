import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react"


interface userGitType {
    name: string,
    login: string,
    bio: string,
    followers: number,
    company: string,
    avatar_url: string,
}
interface data {
    data: userGitType
}
interface userGitContextProps {
    userGit: data;
}
export const userGitContext = createContext({} as userGitContextProps);


interface UserGitContextProviderProps {
    children: ReactNode
}
export function UserGitContextProvider( {children} : UserGitContextProviderProps){
    const [userGit, setUserGit] = useState({} as data);

    async function fetchGitHubApi(){
        const api = axios.create({
            baseURL: 'https://api.github.com/users'
        })
        
        const response = await api.get('/karendantas');
        setUserGit(response);
    }

    useEffect( () => {
        fetchGitHubApi()
    }, [])

    return (
        <userGitContext.Provider value = {{userGit}}>
            {children}
        </userGitContext.Provider>
    )
}