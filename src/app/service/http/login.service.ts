import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelLogin } from 'src/app/components/login/model/ModelLogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL = 'https://61d8db6de6744d0017ba8cd3.mockapi.io';

  constructor(private http:HttpClient) { }

  login():Observable<ModelLogin[]>{
    return this.http.get<ModelLogin[]>(this.URL+'/users');
  }
}
