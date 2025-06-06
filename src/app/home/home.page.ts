import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatosModalComponent } from './modal.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  usuario: string = '';
  nombre: string = '';
  apellido: string = '';
  nivelEducacion: string = '';
  fechaNacimiento: string = '';

  constructor(
    private modalController: ModalController,
    private router: Router) {}

  ngOnInit() {
    this.usuario = localStorage.getItem('usuario') || '';
  }

  limpiar() {
    this.nombre = '';
    this.apellido = '';
    this.nivelEducacion = '';
    this.fechaNacimiento = '';
  }
    irAlmenuUser(){
    this.router.navigate(['/menu-user']);
  }

  async mostrar() {
    const modal = await this.modalController.create({
      component: DatosModalComponent,
      componentProps: {
        nombre: this.nombre,
        apellido: this.apellido,
        nivelEducacion: this.nivelEducacion,
        fechaNacimiento: this.fechaNacimiento
      },
      cssClass: 'modal-tamano-personalizado' // <-- clase personalizada
    });
    await modal.present();
  }
  botonEstado: 'guardar' | 'siguiente' = 'guardar';

  avanMenu() {
    if (this.botonEstado === 'guardar') {
      // Guardar datos
      const usuarioData = {
        nombre: this.nombre,
        apellido: this.apellido,
        nivelEducacion: this.nivelEducacion,
        fechaNacimiento: this.fechaNacimiento
      };
      localStorage.setItem('usuarioData', JSON.stringify(usuarioData));
      this.botonEstado = 'siguiente';
    } else if (this.botonEstado === 'siguiente') {
      // Navegar a menu-user
      this.router.navigate(['/menu-user']);
    }
  }
  }