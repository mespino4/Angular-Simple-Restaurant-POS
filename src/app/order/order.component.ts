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
    console.log('before this name: ' + this.Name);
    //this.Name = this.invoiceService.orderName;
    console.log('after this name: ' + this.Name);

    /*
    if(this.invoiceService.getOrder(this.Name) != null){ //if this order exists
      console.log('inside ngONinit of invoiceComponent');
      this.Items = this.invoiceService.getOrder(this.Name).items;
      //console.log(this.invoiceService.getOrder(this.Name).items);
      //console.log(this.Items)
      this.TaxAmount = this.invoiceService.getOrder(this.Name).tax;
      //console.log(this.TaxAmount)
      this.SubTotal = this.invoiceService.getOrder(this.Name).subtotal;
      //console.log('subTotal saved: ' + this.invoiceService.getOrder(this.Name).SubTotal)
      this.Total = this.invoiceService.getOrder(this.Name).total;
    }
    */
  }

  saveButton(){

    this.saveOrder();
    
    //this.invoiceService.invoiceToggle(false);
    /*
    this.Name = '';
    this.Items = [];
    this.SubTotal = 0.00;
    */
  }

  setOrderName(name: string):void {
    this.Name = name
  }

  addItem(name: string, price: number): void {
    const taxRate: number = 0.0625;

    this.Items.push({ name: name, price: price });
    this.SubTotal += price;
    this.TaxAmount = (this.SubTotal * taxRate);
    this.Total = this.SubTotal + this.TaxAmount;
  }

  saveOrder(): void {
    const order = {name: this.Name, items: this.Items, subtotal: this.SubTotal, 
      tax: this.TaxAmount, total: this.Total}

    console.log('subtotal to be saved is ' + order.subtotal);

    //this.invoiceService.setOrder(this.Name, order);

    console.log('saveOrder() mehtod called from indide invoice component');

    /*
      const data = { name: 'John', age: 30 };
      this.localStorageService.setItem('myData', data);
    */
  }

  getOrder(): any {
    /*
    const data = this.invoiceService.getItem('myData');
    console.log(data);
    */

    //const order = this.invoiceService.getOrder(this.Name);
    console.log('this is from getOrder() inside invoice component: ');
    //console.log(this.invoiceService.getOrder(this.Name).name);
    //return this.invoiceService.getOrder(this.Name);
  }

  removeOrder(): void {
    //this.invoiceService.removeItem('myData');
    //this.invoiceService.removeOrder(this.Name);
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
