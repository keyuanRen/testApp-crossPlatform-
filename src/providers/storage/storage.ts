//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fruit } from '../../models/fruit';

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  //public http: HttpClient
  constructor() {

  }

  writeData( data:Array<Fruit>)
  {
    const datastring:string = JSON.stringify(data);
    window.localStorage.setItem('fruitdata' , datastring);
  }

  readData()
  {
    if( window.localStorage.getItem('fruitdata'))
    {
      return JSOM.parse( window.localStorage.getItem('fruitdata'));
    }
    else
    {
      return null;
    }

  }

}
