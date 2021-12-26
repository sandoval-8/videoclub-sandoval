import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modelo/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  rol:string | undefined = 'ROL_USER';
  username:string | undefined = '';
  user:User = User.getInstance();

  constructor() {
   
  }

  ngOnInit(): void {   

    this.username = this.user.getUsername();
    this.rol = this.user.getRol();
    console.log('user:' + this.user + ' rol:' + this.rol);
  }

}
