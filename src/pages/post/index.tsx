import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";

import {PostHeading, 
        PostInfos, 
        PostItemContainer, 
        PostItemContent, 
        PostLinks } from "./styles";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons/faCalendarDay";

export function Posts (){
    return (
        <PostItemContainer>
            <PostHeading>
                <PostLinks> 
                    <a href=""> <FontAwesomeIcon icon={faChevronLeft} /> VOLTAR</a>
                    <a href="">VER NO GITHUB <FontAwesomeIcon icon = {faArrowUpRightFromSquare} /> </a>
                </PostLinks>
                <h2>JavaScript data types and data structures</h2>
                
                <PostInfos>
                        <div>
                            <FontAwesomeIcon icon={faGithub} />
                            <span>camerowçç</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faCalendarDay} />
                            <span>Há 1 dia</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faComment} />
                            <span>comentários</span>
                        </div>
                      
            </PostInfos>
            </PostHeading>

            <PostItemContent>
                <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
                    
                </p>

                <p>
                Dynamic typing
                    JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types
                </p>


            </PostItemContent>
        </PostItemContainer>
    )
}