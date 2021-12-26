import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/service/http/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private registroService:RegistroService) {
    this.form = this.fb.group({
      email: [''],
      nombre: [''],
      newcontraseña: [''],
      contraseña: ['']
    });
  }

  ngOnInit(): void {
//    throw new Error('Method not implemented.');
  }

  registrarse() {
    if(this.form.valid){
      let email = this.form.get('email')?.value;
      let username = this.form.get('nombre')?.value;
      let password = this.form.get('newcontraseña')?.value;
      this.registroService.registro(email,username,password).subscribe();
    }    
  }

  redirecToLogin() {
    this.router.navigate(['/form/login']);
  }

}
