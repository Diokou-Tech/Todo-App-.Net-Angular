import { environment } from "src/environments/environment.development";

export class AppConsts
{
    public static AuthUrlApi = {
        "register" : environment.ApiUrlBase+"Auth/Register",
        "login" : environment.ApiUrlBase+"Auth/Login"
    }
}