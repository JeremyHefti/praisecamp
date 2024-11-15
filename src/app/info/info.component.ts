import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  eventDate: string = '27.12.2024 - 01.01.2024';
  eventLocation: string = 'Messe Basel';
  eventCost: number = 360;
  anreise: string = 'ÖV, genau Zeit wird noch abgeklärt'

  members = [
    { name: 'Jeremy Hefti', role: 'Organisator' },
    { name: 'Elina Hefti', role: 'Organisator' },
    { name: 'Leon Höfferer', role: 'Teilnehmer/Dev' },
    { name: 'Elina', role: 'Teilnehmer' },
    { name: 'Jana Hefti', role: 'Teilnehmer' },
    { name: 'Jana Ranieli', role: 'Teilnehmer' },
    { name: 'Mea Ruprecht', role: 'Teilnehmer' },
    { name: 'Micha Ruprecht', role: 'Teilnehmer' },
    { name: 'Seraina', role: 'Teilnehmer' },
    { name: 'Yöni', role: 'Teilnehmer' },

  ];
}
