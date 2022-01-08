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
    this.subscription = this.serviceLogin.login().subscribe((users) => {
      console.log(users);
      for(let user of users){
        console.log(user.username + " " + username);
        if(user.username == username && user.password == password){
          console.log("Logueado");
          if(user.rol == "ADMIN"){
            this.router.navigate(['/dashboard']);
          }else {
            this.router.navigate(['/webapp']);
          }
          break
        }
      }
    });
  }

  error() {
    this.form.get('usuario')?.disable;
    this.form.reset;
  }
  redirecToRegistro() {
    this.router.navigate(['/form/registro']);
  }
}
