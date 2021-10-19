

/**
 * Receber o code (string)
 * Recuperar o acess token no gitub
 * verificar se o usuário existe no banco de dados
 * -------  sim = Gera um token
 * -------- nao = cria no db, gera o token
 * retornar o token com as infos do user
 */

class AuthenticateUserService {
    async excecute(code: string) {

    }
}

export { AuthenticateUserService };