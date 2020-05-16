import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/common/services/report.service';
import { CountryReport } from 'src/app/common/interfaces/report.interface';

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

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.getAll();
    this.getBrazil();
    this.getUsa();
    this.getChina();
    this.getItaly();
  }

  getAll() {
    this.reportService.getAll().subscribe(res => {
      console.log(res);
    });
  }

  getBrazil() {
    this.reportService.getBrazil().subscribe((country: CountryReport) => {
      this.brazil = country;
      console.log(this.brazil);
    });
  }

  getUsa() {
    this.reportService.getUsa().subscribe((country: CountryReport) => {
      this.unitedStates = country;
    });
  }

  getChina() {
    this.reportService.getChina().subscribe((country: CountryReport) => {
      this.china = country;
    });
  }

  getItaly() {
    this.reportService.getItaly().subscribe((country: CountryReport) => {
      this.italy = country;
      console.log(country);
    });
  }
}
