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
    RouterLink
  ],
})
export class ClientsPage implements OnInit {
  clients: any[] = [];
  id: number = 0;

  constructor(private service: Clients, private router:Router, private route:ActivatedRoute) {}

  ngOnInit() {}

  async ionViewWillEnter() {
    this.clients = await this.service.getClients();
  }

  async delete(id:number){
      await this.service.deleteClient(id);
      this.clients = await this.service.getClients();
     console.log(`clients.page: delete, id:` + id);
  } // fin delete
  
} // Fin de la clase ClientsPage
