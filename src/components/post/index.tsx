// import { useContext } from "react";
import {PostContainer,
        PostContent } from "./styles";
// import { userGitContext } from "../../contexts/userGitContext";

export function Post (){
    // const {userPosts} = useContext(userGitContext);
    return (
        <PostContainer>
              <PostContent>
                    <header>
                        <h2>ahjg</h2>
                        <span>Há 1 dia</span>
                    </header>
                    <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
                    </p>
                </PostContent>
        </PostContainer>
    )
}