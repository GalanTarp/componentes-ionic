import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment, { static: true }) segment: IonSegment;
  superheroes: Observable<any>;
  publisher = '';

  constructor(private dataSvc: DataService) { }

  ngOnInit() {
    this.segment.value = 'todos';
    this.superheroes = this.dataSvc.getSuperheroes();
  }

  segmentChanged(event) {
    const valorSegmento = event.detail.value;

    if (valorSegmento === 'todos') {
      this.publisher = '';
      return;
    }

    this.publisher = valorSegmento;
  }
}
