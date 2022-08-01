import { Component, } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Aquaman', 'Superman', 'Batman', 'Flash'];
  heroesBorrados: string[] = [];
  
  borrarHeroe(){
    const heroeBorrado=this.heroes.pop();
    if(heroeBorrado!=undefined){
      this.heroesBorrados.push(heroeBorrado);
    }
  }
}
