import { Injectable } from '@angular/core';
import { cancionesLista } from '../interface/modelo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicemusicaService {
  musicaServ:cancionesLista[]=[];

  constructor(private http:HttpClient ) { 
 }
 getMusica(){
   return this.musicaServ;
 }
 addMusica(lista:cancionesLista){
   this.musicaServ.push(lista);
 }
}