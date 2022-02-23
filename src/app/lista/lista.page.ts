import { Component, OnInit } from '@angular/core';
import { cancionesLista } from '../interface/modelo';
import { ServicemusicaService } from '../service/servicemusica.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  musicaServ:cancionesLista[]=[];

   constructor(private servicioLista:ServicemusicaService) { }

  ngOnInit(): void {
    this.musicaServ = this.servicioLista.getMusica();

    console.log("Datos");
    console.log(this.musicaServ);
      
  }
}