import { Component } from "@angular/core";

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
  name: string = 'Ironman';
  age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getName(): string {
    return `${this.name}-${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman'
  }

  changeAge(): void {
    this.age = 30
  }

  resetForm(): void {
    this.name = ' Ironman';
    this.age = 45;

    // document.querySelectorAll('h1').forEach(element => {
    //   element.innerHTML = '<h1>Desde Angular </h1>';
    // });
  }

}