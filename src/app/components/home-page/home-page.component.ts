import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/user.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  public listaUsuarios: Array<Usuario> = [];
  estadoLista!: Boolean;

  constructor() {}

  ngOnInit(): void {
    this.mostrarUsuarios();
  }

  mostrarUsuarios() {
    var userDB = JSON.parse(localStorage.getItem('usuarios')!);

    this.listaUsuarios = userDB;

    if (this.listaUsuarios == null) {
      this.estadoLista = false;
    } else {
      this.estadoLista = true;
    }
  }

  eliminarTodos() {
    localStorage.removeItem('usuarios');
    location.reload();
  }

  eliminarUsuario(id: string) {
    let userDB = JSON.parse(localStorage.getItem('usuarios')!);
    this.listaUsuarios = userDB;

    if (localStorage.getItem('usuarios')) {
      this.listaUsuarios =  this.listaUsuarios.filter((item)=> item.id !== id);
    }
    
    localStorage.setItem('usuarios', JSON.stringify(this.listaUsuarios));
    location.reload();
  }

  agregarUsuario(user: Usuario) {
    this.usuariosDefault();
    this.listaUsuarios.push(user);
    localStorage.setItem('usuarios', JSON.stringify(this.listaUsuarios));
  }

  usuariosDefault() {
    const user1 = {
      id: '12345',
      name: 'Juan',
      number: '123456',
      email: 'juan@gmail.com',
    };
    const user2 = {
      id: '333333',
      name: 'Felipe',
      number: '654321',
      email: 'felipe@gmail.com',
    };
    const user3 = {
      id: '54321',
      name: 'Miguel',
      number: '987654',
      email: 'miguel@gmail.com',
    };
    const user4 = {
      id: '987654',
      name: 'Luis',
      number: '456789',
      email: 'luis@gmail.com',
    };

    let userDB = JSON.parse(localStorage.getItem('usuarios')!);

    if (localStorage.getItem('usuarios')) {
      this.listaUsuarios = userDB;
      this.listaUsuarios.push(user1, user2, user3, user4);
    } else {
      this.listaUsuarios = [user1, user2, user3, user4];
    }
    localStorage.setItem('usuarios', JSON.stringify(this.listaUsuarios));
    location.reload();
  }
}
