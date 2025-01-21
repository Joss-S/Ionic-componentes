import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  constructor() {}
  ngOnInit() {
    console.log("Hola Mundo");

    let numero = 0;

    numero = 5;
    numero = 3;
    numero = numero * 2;
    numero = numero / 3;


    console.log("Holis");
    console.log("xd");
    console.log("El ale ");
    console.log(" UJHUHHIHIHI");
    console.log("compita");

  }

}
