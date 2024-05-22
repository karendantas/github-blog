import { useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { SearchInput } from "./styles";
import { useContext } from "react";
import { userGitContext } from "../../../../contexts/userGitContext";


const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormInput = z.infer< typeof searchFormSchema >
export function SearchForm () {
    const { fetchGitHubSearchUserPost } = useContext(userGitContext);

    const { register, handleSubmit } = useForm<SearchFormInput>({
        resolver: zodResolver(searchFormSchema)
    });

    async function handleSearchPost(data: SearchFormInput){
        await fetchGitHubSearchUserPost(data.query);
    }
    return (
        <form onSubmit={handleSubmit(handleSearchPost)}>
            <SearchInput 
                placeholder="Buscar conteúdo"
                {...register('query')}
                />
         
        </form>
    )
}