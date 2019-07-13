import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;

  constructor() { }

  ngOnInit() {
      this.usuario = new UsuarioModel();

      // this.usuario.email = 'josebrunoaguilar@gmail.com';
      // this.usuario.nombre = 'bruno aguilar';
      // this.usuario.password = 'tahuichi123';
  }

  onSubmit(form: NgForm) {

    if (form.invalid) { return; }
    console.log(this.usuario);
  }

}
