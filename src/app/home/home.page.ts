import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs/internal/Observable';
import { Componente } from '../interfaces/interfaces';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  componentes: Observable<Componente[]>;
  constructor(private menuCtrl: MenuController, private dataSvc: DataService) { }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  ngOnInit() {
    this.componentes = this.dataSvc.getMenuOpts();
  }

}
