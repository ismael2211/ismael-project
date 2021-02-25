import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-boxeador-nuevo',
  templateUrl: './boxeador-nuevo.component.html',
  styleUrls: ['./boxeador-nuevo.component.css']
})
export class BoxeadorNuevoComponent implements OnInit {

  formulario!: FormGroup; // Representa al formulari i els seus inputs


  ngOnInit(): void {
    this.formulario = new FormGroup(
      {
        id: new FormControl("Yas Marina GP", [Validators.required]),
        nombre: new FormControl("" , [Validators.minLength(3)]),
        edad: new FormControl([Validators.required]),
        categoria: new FormControl("" , [Validators.required] ),
      }
    )
  }
  constructor() {

  }


  crear() {
    console.log(this.formulario);
  }

}
