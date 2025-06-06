import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca',
  templateUrl: 'acerca.page.html',
  styleUrls: ['acerca.page.scss'],
  standalone: false
})
export class AcercaPage implements OnInit {
  expandido: number | null = null;

  constructor() { }

  ngOnInit() {
  }

}
