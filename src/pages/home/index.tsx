
import { useContext } from "react";
import { Post } from "../../components/post";
import { userGitContext } from "../../contexts/userGitContext";
import { Profile } from "./components/profile";
import { SearchForm } from "./components/searchForm";
import { HomeContainer, IssuesInfo, IssuesContainer } from "./styles";
import { Link } from "react-router-dom";


export function Home (){
    const {userPosts} = useContext(userGitContext);
    return (
        <HomeContainer>
            <Profile />

            <IssuesInfo>
                <h2>Publicações</h2>
                <span>6 publicações</span>
            </IssuesInfo>

            <SearchForm />

            <IssuesContainer>
                
                {userPosts.map((post) => {
                    return (
                        <Link 
                            to={`/post/${post.number}`} 
                            key={post.id}
                            >
                        <Post 
                            key = {post.id} 
                            data = {post}
                        />
                        </Link>
                    )
                })}
            </IssuesContainer>
            
        </HomeContainer>
    )
}