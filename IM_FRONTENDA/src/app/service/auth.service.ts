import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioConectadoSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public usuarioConectado$: Observable<string> = this.usuarioConectadoSubject.asObservable();


  url: string = "https://localhost:7292/api/auth/";
  constructor(private _http: HttpClient) { }


  login(request: any): Observable<any> {
    return this._http.post<any>(this.url, request);
  }

  setUsuarioConectado(nombreUsuario: string): void {
    this.usuarioConectadoSubject.next(nombreUsuario);
  }

}
