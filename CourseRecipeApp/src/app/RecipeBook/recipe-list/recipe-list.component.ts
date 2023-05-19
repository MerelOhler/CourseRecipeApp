import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://www.papertraildesign.com/wp-content/uploads/2017/10/Recipe-Card-3x5.jpg'),
    new Recipe('A Second test recipe', 'This is is such a yummy recipe you HAVE to try it!!!!!', 'https://eatwithclarity.com/wp-content/uploads/2022/12/dairy-free-cake-9.jpg')
  ]

  constructor() { }

  ngOnInit(): void {

  }
}
