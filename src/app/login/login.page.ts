import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor() {
 
   }

  ngOnInit() {
  }
  login( tangamandapio: NgForm){
    if(tangamandapio.invalid){
      console.log('Todos los campos requeridos');
      return;
    }
    console.log('email: ', this.email);
    console.log('password: ', this.password);
    //Obtenemos los valores del formulario
    console.log(tangamandapio.value);

    //Validar formulario
    console.log('valid', tangamandapio.valid);


    //Si tangamandapio es invalido
    //console.log('Todos los campos requeridos')
    //return
    if(
      tangamandapio.valid ==true
    
    ){    // Si usuario = admin y password = admin
      //Entonces console.log('Login correcto)
      //Sino console.log('Login incorrecto')
    if (
       this.email == 'admin' &&
       this.password =='admin'){
       console.log('Login correcto');
       }
       else{
        console.log('Login incorrecto');
       }
      }
     
  //verificación con precision se le pone === y si no importa tanto solo se ponen dos ==}else

    }
}
