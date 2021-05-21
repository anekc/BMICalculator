import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  peso = 60;
  edad = 25;
  altura = 170;
  sexo = 'masculino'

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  cambiarAltura(event: any){
    console.log(event);
    this.altura = event.target.value; 
  }

  masculino(){
    this.sexo = 'Masculino';
  }

  femenino(){
    this.sexo = 'Femenino';
  }

  calcularBMI(){

    const BMI = this.peso/Math.pow(this.altura/100,2);
    console.log(BMI.toFixed(1));
    //calculos


this.router.navigate(['/resultado', BMI.toFixed(1)]);
  }
}
