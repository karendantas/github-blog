
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

import {GitLink, ProfileContainer, 
        ProfileContent, 
        ProfileInfos } from "./styles";


export function Profile (){
    return (
        <ProfileContainer>
            <ProfileContent>
                <img src="https://github.com/karendantas.png" alt=""/>
                <div>
                    <h2>Cameroan</h2>
                    <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. dfsxdmeurbumbandoaod ajksf aossdf, ajskdfjsf.</p>
                    <ProfileInfos>
                        <div>
                            <FontAwesomeIcon icon={faGithub} />
                            <span>camerowçç</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faBuilding} />
                            <span>camerowçç</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faUserGroup} />
                            <span>camerowçç</span>
                        </div>
                      
                    </ProfileInfos>
                </div>
                
                    <GitLink> 
                        GITHUB <FontAwesomeIcon icon = {faArrowUpRightFromSquare} />    
                    </GitLink>
                   
            </ProfileContent>
        </ProfileContainer>
    )
}