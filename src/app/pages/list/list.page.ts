import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista') lista: IonList;
  usuarios: Observable<any>;

  constructor(private dataSvc: DataService,
              private toastCtrl: ToastController) { }

  ngOnInit() {
    this.usuarios = this.dataSvc.getUsers();
  }

  async presentToast( message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  favorite(user) {
    // console.log('favorite', user);
    this.presentToast('Se guardó en favoritos');
    this.lista.closeSlidingItems();
  }
  share(user) {
    // console.log('share', user);
    this.presentToast('Compartido');
    this.lista.closeSlidingItems();
  }
  borrar(user) {
    this.presentToast('Borrado');
    this.lista.closeSlidingItems();
  }

}
