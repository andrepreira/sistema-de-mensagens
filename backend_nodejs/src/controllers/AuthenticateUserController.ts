import {request, response} from 'express';
import { AuthenticateUserService } from '../services/AuthenticateUserService';


class AuthenticateUserController {
    async handle(request: Request, response: Response){
        const service = new AuthenticateUserService();
        //service.excecute('323232');
    }
}

export { AuthenticateUserController };