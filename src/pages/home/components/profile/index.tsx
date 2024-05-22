
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
                <img src={userGit.avatar_url} alt=""/>
                <div>
                    <h2>{userGit.name }</h2>
                    <p>{userGit.bio}.</p>
                    <ProfileInfos>
                        <div>
                            <FontAwesomeIcon icon={faGithub} />
                            <span>{userGit.login}</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faBuilding} />
                            <span>{userGit.company}</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faUserGroup} />
                            <span>{userGit.followers}</span>
                        </div>
                      
                    </ProfileInfos>
                </div>
                
                   
            </ProfileContent>

                    <GitLink href={`https://github.com/${userGit.login}`} target="_blank"> 
                        GITHUB <FontAwesomeIcon icon = {faArrowUpRightFromSquare} />    
                    </GitLink>
                    
        </ProfileContainer>
    )
}