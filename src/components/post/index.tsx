
import { userPostsType } from "../../contexts/userGitContext";
import {PostContainer,
        PostContent } from "./styles";

interface PostProps {
    data: userPostsType;
}
export function Post ({data}: PostProps){

    return (
        <PostContainer>

                    <PostContent >
                            <header>
                                <h2> {data.title}</h2>
                                <span>{data.created_at}</span>
                            </header>
                            <p>{data.body}</p>
                    </PostContent>
                    
           
        </PostContainer>
    )
}