import axios from "axios";

/**
 * Receber o code (string)
 * Recuperar o access token no gitub
 * recuperar infos do user no github
 * verificar se o usuário existe no banco de dados
 * -------  sim = Gera um token
 * -------- nao = cria no db, gera o token
 * retornar o token com as infos do user
 */

interface IAccessTokenResponse {
    access_token: string
}

interface IUserResponse{
    avatar_url: string
    login: string,
    id: number,
    name: string
}

class AuthenticateUserService {
    async excecute(code: string) {
        const url = 'https://github.com/login/oauth/access_token';

        const { data: accessTokenResponse } = await axios.post<IAccessTokenResponse>(url,null, {
            params: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code,
            },
            headers: {
                "Accept": "application/json"
            } 
        });

        const response = await axios.get<IUserResponse>('https://api.github.com/user', {
            headers: {
                authorization: `Bearer ${accessTokenResponse.access_token}`
            }
        })

        return response.data;
    }
}

export { AuthenticateUserService };