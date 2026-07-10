import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

import { Clients } from 'src/app/services/clients';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    RouterLink,
  ],
})
export class ClientsPage implements OnInit {
  clients: any[] = [];
  id: number = 0;

  constructor(
    private service: Clients,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() { this.loadClients()}

   async loadClients(){
     this.clients = await this.service.getClients();
  }

  /*
  async delete(id: number) {
    await this.service.deleteClient(id);
    this.clients = await this.service.getClients();
    console.log(`clients.page: delete, id:` + id);
  } // fin delete
  */

  async delete(id: number) {
    const confirmar = confirm('¿Desea eliminar este cliente?');
    if (!confirmar) {
      return;
    }
    try {
      await this.service.deleteClient(id); // id pasado desde el template
      // await this.service.getClients();  // refrescar la vista
      await this.loadClients();     // refrescar la vista
    } catch (error) {
      console.error(error);
      alert('Error eliminando cliente');
    }
  }

} // Fin de la clase ClientsPage
