import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{

  /*The folowing booleans are used to turn off 
  the the sfood category toggles*/
  drinks = true;
  burgers = false;
  sides = false;
  salads = false;
  desserts = false;
  kids = false;

  /*The following variables are properties for the invoice*/
  Name: string = '';        //String for the name of the customer
  Items: Item[] = [];       //This array is for the list of items
  TaxAmount: number = 0.00; //This is for the total tax of the subtotal
  SubTotal: number = 0.00;  //This is for the price of all items without tax
  Total: number = 0.00;     //This is for the price of all items with tax included

  constructor(){}

  /*When the application starts up it will always start with
  the Drinks category open */
  ngOnInit(): void {
    this.drinksToggle();
  }

  /*Adds item to the invoice */
  addItem(name: string, price: number): void {
    const taxRate: number = 0.0625;

    this.Items.push({ name: name, price: price });
    this.SubTotal += price;
    this.TaxAmount = (this.SubTotal * taxRate);
    this.Total = this.SubTotal + this.TaxAmount;
  }

  /*Removes the item from the invoice*/
  removeItem(index: number){
    this.Items.splice(index, 1);
    
  }

  saveButton(){}

  /*Prints the invoice*/
  printButton(){
    window.print();
  }

  processPaymentButton(){}


  /*The following toggles to switch to a new food category*/
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
