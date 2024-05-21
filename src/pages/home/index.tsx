import { Profile } from "./components/profile";
import { SearchForm } from "./components/searchForm";
import { HomeContainer, IssuesInfo } from "./styles";


export function Home (){
   
    return (
        <HomeContainer>
            <Profile />

            <IssuesInfo>
                <h2>Publicações</h2>
                <span>6 publicações</span>
            </IssuesInfo>

            <SearchForm />
            
        </HomeContainer>
    )
}