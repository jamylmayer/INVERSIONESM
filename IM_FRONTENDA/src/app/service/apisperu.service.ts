import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApisperuService {

  private url: string = "https://dniruc.apisperu.com/api/v1/";
  private token: string = "DEBEN PONER EL TOKEN QUE LES GENERA APIS PERÚ";
  constructor(
    private _http: HttpClient
  ) { }


    consultaDNI(dni:string)
    {
      return this._http.get(`${this.url}dni/${dni}?token=${this.token}`)
    }

    consultaRUC(ruc:string)
    {
      return this._http.get(`${this.url}ruc/${ruc}?token${this.token}`)
    }
}
