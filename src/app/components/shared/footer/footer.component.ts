import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Output() ocultarEvent = new EventEmitter<boolean>();

  oculto = false;

  constructor() { }

  ngOnInit(): void {
  }

  openPokedex(): void {
    this.oculto = false;
    this.ocultarEvent.emit(this.oculto);
  }

}
