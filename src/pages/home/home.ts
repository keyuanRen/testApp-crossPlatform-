import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Fruit } from '../../models/fruit';

import { StorageProvider } from '../../providers/storage/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items:Array<any> = [];
  input:string;
  name:string;
  colour:string;
  taste:string;
  constructor(public navCtrl: NavController, private storage:StorageProvider) {
    let fruitedata = this.storage.readData();
    if( fruitdata )
    {
      this.items = fruitdata;
    }

  }

  doSomthing()
  {
    console.log(this.input);
  }

  addItem()
  {
    // let item = this.input;
    // this.items.push(item);
    // this.input='';
    let fruit = new Fruit(this.name,this.colour,this.taste);
    this.items.push(fruit);
    //store the fruit Array
    this.storage.writeData( this.items );
    this.name='';
    this.colour='';
    this.taste='';
  }

}
