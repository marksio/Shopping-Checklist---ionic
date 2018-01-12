import { Firebase } from '../../providers/firebase';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  shoppingItems: FirebaseListObservable<any[]>;
  newItem = '';
 
  constructor(public navCtrl: NavController, public firebaseProvider: Firebase) {
    this.shoppingItems = this.firebaseProvider.getShoppingItems();
  }
 
  addItem() {
    this.firebaseProvider.addItem(this.newItem);
  }
 
  removeItem(id) {
    this.firebaseProvider.removeItem(id);
  }
}