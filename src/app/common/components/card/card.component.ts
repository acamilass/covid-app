import { Component, OnInit, Input } from '@angular/core';
import { CountryReport } from '../../interfaces/report.interface';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() isLoading: boolean = true;
  @Input() countryFlag: string;
  @Input() countryData: CountryReport;

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';

  constructor() { }

  ngOnInit(): void {
  }

}
