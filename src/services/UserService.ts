import axios from 'axios'

export class UserService{
    private static serverURL: string = `https://jsonplaceholder.typicode.com`

    public static getAllUsers(){
        let dataURL:string = `${this.serverURL}/users`;
        return axios.get(dataURL)
    }
}