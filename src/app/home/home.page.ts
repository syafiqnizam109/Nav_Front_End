import { Component } from '@angular/core';
import { element } from 'protractor';
import { createPublicKey } from 'crypto';
import { title } from 'process';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  private icons = [
    'KLCC',
    'ISetan',
    'IKEA','AEON'
  ];
 
  public items: Array<{ title: string; icon: string }> = [];
  public allItems: Array<{ title: string; icon: string }> = [];

  constructor() {
    for (let i = 0; i < this.icons.length; i++) {
      this.items.push({
        title: this.icons[i].charAt(0).toUpperCase() + this.icons[i].slice(1),
        icon: this.icons[i]
      });
    }
    this.allItems = this.items;
  }

  onSearchTerm(ev: CustomEvent) {
    this.items = this.allItems;
    const val = ev.detail.value;

    if (val && val.trim() !== '') {
      this.items = this.items.filter(term => {
        return term.title.toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
      });
    }
  }

  itemSelected(item: object) {
    console.log("Selected Items", item);
    var x =item[0].title;
    if (x !== -1 ){
      alert("KLCC");
    }
  }


  removeSingleClass(){
    var elem = document.getElementById("content")
    elem.classList.remove("hide");
  }

}




