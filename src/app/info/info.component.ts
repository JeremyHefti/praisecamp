import { Component } from '@angular/core';
import info_data from '../../assets/json/info_data.json';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  protected readonly info_data = info_data;
}
