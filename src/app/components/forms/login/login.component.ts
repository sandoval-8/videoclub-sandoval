import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from 'rxjs';
import { User } from 'src/app/modelo/user';
import { LoginService } from 'src/app/service/http/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  subscription: Subscription = new Subscription();
  form: FormGroup;
  loading = false;
  USER = User.getInstance();

  constructor(private fb: FormBuilder, private router: Router, private serviceLogin: LoginService) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      contraseña: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  ingresar() {
    let username = this.form.get('usuario')?.value;
    let password = this.form.get('contraseña')?.value;
    let isLogin = false;
    this.subscription = this.serviceLogin.login().subscribe((users) => {
      for (let user of users) {
        console.log(user.username);
        console.log(username);
        console.log(user.password);
        console.log(password);
        if (username == user.username && password == user.password) {
          
          this.USER.setUsername(user.username);
          this.USER.setRol(user.rol);
          console.log('Logueado con exito!');
          isLogin = true;
          break;
        }
      }
      if(isLogin){
        localStorage.setItem('user', JSON.stringify(this.USER));
        this.router.navigate(['/webapp/lista']);
      }else {
        console.log('Usuario o contraseña incorrecta');
        this.error()
      }
    });
  }

  error() {
    this.form.get('usuario')?.disable;
    this.form.reset;
  }

  fakeLoading() {

  }
  redirecToRegistro() {
    this.router.navigate(['/form/registro']);
  }
}
