import { Component, OnInit } from '@angular/core';
import { CountryReport } from 'src/app/common/interfaces/report.interface';
import { ReportService } from 'src/app/common/services/report.service';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-other-countries',
  templateUrl: './other-countries.component.html',
  styleUrls: ['./other-countries.component.scss']
})
export class OtherCountriesComponent implements OnInit {

  public allCountries: CountryReport;
  public isLoading: boolean = true;

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.getAllCountries();
  }

  getAllCountries() {
    this.reportService.getAllCountries().subscribe((countries: CountryReport) => {
      this.isLoading = false;
      this.allCountries = countries;
    });
  }

}
