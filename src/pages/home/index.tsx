
import { Post } from "../../components/post";
import { Profile } from "./components/profile";
import { SearchForm } from "./components/searchForm";
import { HomeContainer, IssuesInfo, IssuesContainer } from "./styles";


export function Home (){
   
    return (
        <HomeContainer>
            <Profile />

            <IssuesInfo>
                <h2>Publicações</h2>
                <span>6 publicações</span>
            </IssuesInfo>

            <SearchForm />

            <IssuesContainer>
                <Post />
                <Post />
                <Post />
                <Post />
            </IssuesContainer>
            
        </HomeContainer>
    )
}