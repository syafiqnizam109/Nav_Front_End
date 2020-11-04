import { Component, OnInit } from '@angular/core';
import { FirstpathPage } from 'C:/Users/Acer/Desktop/nav/mynav/firstpath/firstpath.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-search',
  templateUrl: './shop-search.page.html',
  styleUrls: ['./shop-search.page.scss'],
})

export class ShopSearchPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  navigate(){
    this.router.navigate(['/firstpath'])
  }
}
