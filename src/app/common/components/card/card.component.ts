import { Component, OnInit, Input } from '@angular/core';
import { CountryReport } from '../../interfaces/report.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() countryFlag: string;
  @Input() countryData: CountryReport;

  constructor() { }

  ngOnInit(): void {
  }

}
