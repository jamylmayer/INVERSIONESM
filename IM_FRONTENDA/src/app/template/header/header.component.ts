import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  usuario: string = "Nombre de Usuario";

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.usuarioConectado$.subscribe((nombreUsuario: string) => {
      this.usuario = nombreUsuario;
    });
  }
}
