import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/common/services/report.service';
import { CountryReport } from 'src/app/common/interfaces/report.interface';
import { StateReport } from 'src/app/common/interfaces/state-report.interface';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public brazil;
  public unitedStates;
  public china;
  public italy;
  public statesData: StateReport;
  displayedColumns: string[] = ['state-flag', 'state-name', 'confirmed'];

  public isLoading: boolean = true;

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';


  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.getAll();
    this.getBrazil();
    this.getUsa();
    this.getChina();
    this.getItaly();
  }

  getAll() {
    this.reportService.getAll().subscribe((states: StateReport) => {
      this.isLoading = false;
      this.statesData = states;
      console.log(states);
    });
  }

  getBrazil() {
    this.reportService.getBrazil().subscribe((country: CountryReport) => {
      this.isLoading = false;
      this.brazil = country;
    });
  }

  getUsa() {
    this.reportService.getUsa().subscribe((country: CountryReport) => {
      this.isLoading = false;
      this.unitedStates = country;
    });
  }

  getChina() {
    this.reportService.getChina().subscribe((country: CountryReport) => {
      this.isLoading = false;
      this.china = country;
    });
  }

  getItaly() {
    this.reportService.getItaly().subscribe((country: CountryReport) => {
      this.isLoading = false;
      this.italy = country;
    });
  }
}
