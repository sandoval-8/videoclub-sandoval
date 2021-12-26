
export class User {

    private static user: User;
    private _username?: string;
    private _rol?: string;


    private constructor() {
    }

    public static getInstance(): User{
        if(!User.user){
            console.log("NOOO EXISTE!!");
            User.user =  new User();
        }else {
            console.log("EXISTE!")
        }
        return User.user;
    }

    public getUsername(): string | undefined {
        return this._username;
    }
    public setUsername(username:string) {
        this._username = username;
    }

    public getRol():string | undefined{
        return this._rol;
    }
    public setRol(rol:string){
        this._rol = rol;
    }

    
}