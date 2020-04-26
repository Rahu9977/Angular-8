import { Component, OnInit, ViewChild } from '@angular/core';
import { CountryReports } from '../countryReports';
import { MatTableDataSource } from '@angular/material/table';
import { Mycovid19dataService } from '../mycovid19data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-covid19data',
  templateUrl: './covid19data.component.html',
  styleUrls: ['./covid19data.component.css']
})

export class Covid19dataComponent implements OnInit {
  ELEMENT_DATA :CountryReports[];
  displayedColumns: string[] = ['country', 'cases', 'todayCases', 'deaths',
                                'todayDeaths', 'recovered', 'active', 'critical',
                                'casesPerOneMillion', 'deathsPerOneMillion', 'tests', 'testsPerOneMillion'];
  dataSource = new MatTableDataSource<CountryReports>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private service: Mycovid19dataService) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllReports();
  }
  public getAllReports(){
    let resp = this.service.covid19reports();
    resp.subscribe((reports)=>this.dataSource.data=reports as CountryReports[])
  }
  applyFilter(filterValue: string) {
    // const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
