import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { cancionesLista } from '../interface/modelo';
import { ServicemusicaService } from '../service/servicemusica.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  musicaLista=this.formularioM.group({
    nombre:"",
    artista:"",
    genero:"",
    year:""
  })

  cancion:cancionesLista[]=[];


  constructor(private servicioLista:ServicemusicaService, private formularioM:FormBuilder) { }

  guardarc(){
    const guardar : cancionesLista={
      nombre:this.musicaLista.get("nombre")?.value,
      artista:this.musicaLista.get("artista")?.value,
      genero:this.musicaLista.get("genero")?.value,   
      year:this.musicaLista.get("year")?.value
    }
    this.servicioLista.addMusica(guardar);
  
    this.cancion.push(guardar);
    this.musicaLista.reset();
  }
}