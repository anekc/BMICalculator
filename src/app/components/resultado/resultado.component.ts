import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
bmi: number;
resultado: string = '';
interpretacion: string = '';
  constructor(private route: ActivatedRoute) {
    this.bmi = +route.snapshot.paramMap.get('valor')
    console.log(this.bmi);
   }

  ngOnInit(): void {
    this.interpreta();
  }

  interpreta(){
   if (this.bmi >= 25) {
      this.resultado = 'Exceso de peso';
      this.interpretacion = 'Tienes un peso corporal superior al normal, intenta hacer mas ejercicio';
    } else if (this.bmi >=18.5){
      this.resultado = 'Normal';
      this.interpretacion = 'Tienes un índice normal, buen trabajo'
    } else {
      this.resultado ='Bajo peso';
      this.interpretacion = 'Necesitas comer más y hacer mas ejercicio'
    }
  }

}
