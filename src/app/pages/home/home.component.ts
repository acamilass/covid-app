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

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.getAll();
    this.getBrazil();
  }

  getAll() {
    this.reportService.getAll().subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  getBrazil() {
    this.reportService.getBrazil().subscribe((country: CountryReport) => {
      this.brazil = country;
      console.log(this.brazil);
    }, err => {
      console.log(err);
    });
  }
}
