import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Pizza } from '../pizza';

@Component({
  selector: 'jsd-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.css']
})
export class PizzaItemComponent implements OnInit {

  @Input() pizza: Pizza;
  @Output() order = new EventEmitter<Pizza>();

  constructor() { }

  ngOnInit() {
  }

  orderPizza() {
    this.order.emit(this.pizza);
  }

}
