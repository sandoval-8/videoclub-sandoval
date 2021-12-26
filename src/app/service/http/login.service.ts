import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelLogin } from 'src/app/components/login/model/ModelLogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL = 'https://demo7938222.mockable.io';

  constructor(private http:HttpClient) { }

  login():Observable<ModelLogin[]>{
    return this.http.get<ModelLogin[]>(this.URL+'/auth/login');
  }
}
