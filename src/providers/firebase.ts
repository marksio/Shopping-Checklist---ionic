import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
 
@Injectable()
export class Firebase {
 
  constructor(public afd: AngularFireDatabase) { }
 
  getShoppingItems() {
    return this.afd.list('/shoppingItems/');
  }
 
  addItem(name) {
    this.afd.list('/shoppingItems/').push(name);
  }
 
  removeItem(id) {
    this.afd.list('/shoppingItems/').remove(id);
  }
}