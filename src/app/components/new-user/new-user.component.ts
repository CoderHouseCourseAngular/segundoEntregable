import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/user.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  public formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  public listaUsuarios: Array<Usuario> = [];

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      number: ['', [Validators.required]],
      email: ['', [Validators.required]],
      genre: ['', [Validators.required]],
    });
  }

  send() {
    let userDB = JSON.parse(localStorage.getItem('usuarios')!);

    if (localStorage.getItem('usuarios')) {
      this.listaUsuarios = userDB;
    }
    
    const user = {
      id: this.formGroup.get('id')!.value,
      name: this.formGroup.get('name')!.value,
      number: this.formGroup.get('number')!.value,
      email: this.formGroup.get('email')!.value,
      genre: this.formGroup.get('genre')!.value,
    };

    console.log(user.genre);

    this.listaUsuarios.push(user);
    console.log(user);
    localStorage.setItem('usuarios', JSON.stringify(this.listaUsuarios));
  }
}
