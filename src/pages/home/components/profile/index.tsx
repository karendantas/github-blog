
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

import {GitLink, ProfileContainer, 
        ProfileContent, 
        ProfileInfos } from "./styles";
import { useContext } from "react";
import { userGitContext } from "../../../../contexts/userGitContext";


export function Profile (){

    const { userGit } = useContext(userGitContext);

    return (
        <ProfileContainer>
            <ProfileContent>
                <img src={userGit.data.avatar_url} alt=""/>
                <div>
                    <h2>{userGit.data.name}</h2>
                    <p>{userGit.data.bio}.</p>
                    <ProfileInfos>
                        <div>
                            <FontAwesomeIcon icon={faGithub} />
                            <span>{userGit.data.login}</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faBuilding} />
                            <span>{userGit.data.company}</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faUserGroup} />
                            <span>{userGit.data.followers}</span>
                        </div>
                      
                    </ProfileInfos>
                </div>
                
                    <GitLink href={`https://github.com/${userGit.data.login}`} target="_blank"> 
                        GITHUB <FontAwesomeIcon icon = {faArrowUpRightFromSquare} />    
                    </GitLink>
                   
            </ProfileContent>
        </ProfileContainer>
    )
}