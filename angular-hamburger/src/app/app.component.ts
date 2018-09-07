import { Ingredient } from './ingredient';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hamburger Dressings And Fixings';
  ingredients = [
    new Ingredient(1,'Pickles'),
    new Ingredient(2,'Tomatoes'),
    new Ingredient(3,'Lettuce'),
    new Ingredient(4,'Onions'),
    new Ingredient(5,'Mayo'),
    new Ingredient(6,'Mustard'),
    new Ingredient(7,'Ketchup')
  ];
  favIng = this.ingredients[0];
}
