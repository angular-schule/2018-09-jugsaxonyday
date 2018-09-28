import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'jsd-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

  pizzas: Pizza[];
  orderList: Pizza[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.pizzas = require('../pizza-data.json');

    // TODO: Das gehört natürlich in einen Service ;-)
    this.http.get<Pizza[]>('https://pizza.angular.schule/pizzas')
      .subscribe(pizzas => this.pizzas = pizzas);
  }

  addOrder(pizza: Pizza) {
    this.orderList.push(pizza);
  }


  getTotal(): number {
    return this.orderList.reduce((acc, item) => acc + item.price, 0);
  }

}
