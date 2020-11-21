import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.page.html',
  styleUrls: ['./refresh.page.scss'],
})
export class RefreshPage implements OnInit {

  items: any[] = [];
  constructor() { }

  ngOnInit() {
  }


  // AnimateCSS
  doRefresh(event) {

    setTimeout(() => {
      this.items = Array(40);
      event.target.complete();
    }, 1500);
  }

}