import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{
  drinks = true;
  burgers = false;
  sides = false;
  salads = false;
  desserts = false;
  kids = false;

  Name: string = '';
  Items: Item[] = [];
  TaxAmount: number = 0.00;
  SubTotal: number = 0.00;
  Total: number = 0.00;

  constructor(){}

  ngOnInit(): void {
    this.drinksToggle();
  }

  addItem(name: string, price: number): void {
    const taxRate: number = 0.0625;

    this.Items.push({ name: name, price: price });
    this.SubTotal += price;
    this.TaxAmount = (this.SubTotal * taxRate);
    this.Total = this.SubTotal + this.TaxAmount;
  }

  saveButton(){

  }

  printButton(){

  }

  processButton(){
    
  }

  drinksToggle(){
    this.drinks = true;
    this.burgers = false;
    this.sides = false;
    this.salads = false;
    this.desserts = false;
    this.kids = false;
  }

  burgersToggle(){
    this.drinks = false;
    this.burgers = true;
    this.sides = false;
    this.salads = false;
    this.desserts = false;
    this.kids = false;
  }

  sidesToggle(){
    this.drinks = false;
    this.burgers = false;
    this.sides = true;
    this.salads = false;
    this.desserts = false;
    this.kids = false;
  }

  saladsToggle(){
    this.drinks = false;
    this.burgers = false;
    this.sides = false;
    this.salads = true;
    this.desserts = false;
    this.kids = false;
  }

  dessertsToggle(){
    this.drinks = false;
    this.burgers = false;
    this.sides = false;
    this.salads = false;
    this.desserts = true;
    this.kids = false;
  }

  kidsToggle(){
    this.drinks = false;
    this.burgers = false;
    this.sides = false;
    this.salads = false;
    this.desserts = false;
    this.kids = true;
  }
}
