import { Component,OnInit, ViewChild ,AfterViewInit} from '@angular/core';
import { EmployeesService } from './employees.service';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort, Sort} from '@angular/material/sort';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit,AfterViewInit{

  displayedColumns: string[] = ['id', 'age', 'dob', 'email', 'salary', 'address','lastName','firstName','contactNumber'];
  totalEmployees: number = 0;
  pageSize: number = 10;
  currentPage: number = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

   constructor(private employeesService:EmployeesService){

   }

   ngOnInit(): void {
    this.employeesService.getEmployees().subscribe((response:any)=>{
      //console.log(response);
      this.totalEmployees = response.length;

      this.dataSource.data = response;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    
   }
   ngAfterViewInit() {
    //this.dataSource.sort = this.sort;
  }
}
