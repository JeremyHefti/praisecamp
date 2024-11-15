import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/'
      },
      {
        label: 'Events',
        icon: 'pi pi-star',
        routerLink: '/event'
      },
      {
        label: 'Info',
        icon: 'pi pi-info-circle',
        routerLink: '/info'
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        routerLink: '/contact'
      }
    ]
  }
}
