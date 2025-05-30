import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class InicioPage implements OnInit, OnDestroy {
  puntos: string = '';
  private intervalId: any;

  constructor(private router: Router) {}

  ngOnInit() {
    let count = 0;
    this.intervalId = setInterval(() => {
      count = (count + 1) % 4; // 0,1,2,3 puntos
      this.puntos = '.'.repeat(count);
    }, 1000);

    setTimeout(() => {
      clearInterval(this.intervalId);
      this.router.navigate(['/login']);
    }, 3000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}