
import { userPostsType } from "../../contexts/userGitContext";
import {PostContainer,
        PostContent } from "./styles";

import { formatDistance} from 'date-fns';
import {ptBR} from 'date-fns/locale'
interface PostProps {
    data: userPostsType;
}
export function Post ({data}: PostProps){

    return (
        <PostContainer>

                    <PostContent >
                            <header>
                                <h2> {data.title}</h2>
                                <span> {formatDistance( new Date(), new Date(data.created_at), {
                                    addSuffix: true,
                                    locale: ptBR
                                })}</span>
                            </header>
                            <p>{data.body}</p>
                    </PostContent>
                    
           
        </PostContainer>
    )
}