// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'ChirpusPizza';

// Item:string [] = ['Chicken Fingers', 'Pizza', 'Wings', 'Breadsticks', 'Ceasar Salad', 'Cinnamon Roll' ]
// Category:string [] = ['dinner','dinner', 'sides', 'sides', 'salads', 'desert']
// Price:number [] = 
// }



import { Component } from '@angular/core';
import { MenuItem } from './interface/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Chirpus Pizza';

  menuItems: MenuItem[] = [
    {
      name: 'Chicken Fingers',
      category: 'Dinner',
      price: 11.99,
      icon: 'drumstick',
    },

    {
      name: 'Pizza',
      category: 'Dinner',
      price: 11.99,
      icon: 'pizza-slice',
    },

    {
      name: 'Breadsticks',
      category: 'Sides',
      price: 4.99,
      icon: 'baguette',
    },

    {
      name: 'Caesar Salad',
      category: 'Salads',
      price: 5.99,
      icon: 'salad',
    },

    {
      name: 'Apple Pie',
      category: 'Dessert',
      price: 8.99,
      icon: 'pie',
    },
  ];
  
}