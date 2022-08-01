import { Component } from "@angular/core";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
})
export class HeroeComponent {
  nombre: string = "Aquaman";
  edad: number = 500;

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }
  obtenerNombre(): string {
    return `${this.nombre} tiene ${this.edad} años`;
  }

  cambiarNombre(): void {
    this.nombre = "Batman";
  }
  cambiarEdad(): void {
    this.edad = 3;
  }
}