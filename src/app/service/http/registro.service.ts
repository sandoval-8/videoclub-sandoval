import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL_REGISTRO = 'https://61d8db6de6744d0017ba8cd3.mockapi.io/users';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http:HttpClient) { }

  registro(email:string, username:string, password:string): Observable<any>{
    return this.http.post(URL_REGISTRO, 
      {
        "email":email,
        "username":username,
        "password":password
      }
    );
  }
}
