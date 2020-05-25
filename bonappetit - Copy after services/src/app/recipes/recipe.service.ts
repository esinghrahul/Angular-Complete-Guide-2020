import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Fried Rice', 
    `Veg rice like you've never had before`,
     'https://www.gimmesomeoven.com/wp-content/uploads/2017/07/How-To-Make-Fried-Rice-Recipe-2-1.jpg',
     [
       new Ingredient('Rice', 1),
       new Ingredient('Onions', 2),
       new Ingredient('Tomatoes', 1)
     ]),
     new Recipe('Tasty Schnitzel', 
    'Delicious snitzel- just awesome!',
     'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
     [
       new Ingredient('Chicken', 1),
       new Ingredient('French Fries', 20)
     ]),
     new Recipe('Big Fat Burger', 
     'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Chicken', 1),
        new Ingredient('Lettuce', 1),
        new Ingredient('Tomatoes', 1)
      ])
  ];
  constructor(private slService: ShoppingListService) { }

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
  
}
