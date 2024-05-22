import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";

import {PostHeading, 
        PostInfos, 
        PostItemContainer, 
        PostItemContent, 
        PostLinks } from "./styles";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons/faCalendarDay";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { userGitContext } from "../../contexts/userGitContext";


import ReactMarkdown from "react-markdown";

export function PostDetail (){

    const { number } = useParams();
    const { userGit, userPosts } = useContext(userGitContext);
    const items = userPosts.map(post => post);

    const currentItem = items.find( (e) => e.number === parseInt(number));
    
    return (
        <PostItemContainer>
           
                <PostHeading>
                    <PostLinks> 
                        <a href=""> <FontAwesomeIcon icon={faChevronLeft} /> VOLTAR</a>
                        <a href="">VER NO GITHUB <FontAwesomeIcon icon = {faArrowUpRightFromSquare} /> </a>
                    </PostLinks>
                        <h2>{currentItem?.title}</h2>
                            
                    <PostInfos>
                            <div>
                                <FontAwesomeIcon icon={faGithub} />
                                <span>{userGit.login}</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faCalendarDay} />
                                    <span>{currentItem?.created_at}</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faComment} />
                                <span>{currentItem?.comments} comentários</span>
                            </div>
                                
                    </PostInfos>
                    </PostHeading>

                    <PostItemContent>
                            <ReactMarkdown> 
                                {currentItem?.body} 
                            </ReactMarkdown> 
                          
                    </PostItemContent>

        </PostItemContainer>
    )
}