import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  albumes: any[] = [];
  textoBuscar = '';
  constructor(private dataSvc: DataService) { }

  ngOnInit() {
    this.dataSvc.getAlbumes()
      .subscribe(albumes => {
        console.log(albumes);
        this.albumes = albumes;
      });
  }

  buscar(event) {
    this.textoBuscar = event.detail.value;

  }

}
