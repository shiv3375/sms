import {
  Component,
  Input,
  OnChanges,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { LeavesServiceService } from '../../services/leaves-service.service';
import { Leaves } from '../../models/leaves';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-studentleaves',
  templateUrl: './studentleaves.component.html',
  styleUrls: ['./studentleaves.component.css'],
})
export class StudentleavesComponent implements OnChanges, AfterViewInit {
  constructor(public leavesservice: LeavesServiceService) {}

  Leaves!: Leaves[];

  dataSource: MatTableDataSource<Leaves> = new MatTableDataSource<Leaves>();

  columnsToDisplayLeave: string[] = [
    'id',
    'startdate',
    'enddate',
    'reason',
    'type',
  ];
  @Input() studentId!: number;
  pageSize = 5; // Number of items to show per page
  pageSizeOptions: number[] = [5, 10, 25, 50]; // Options for the page size
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;
  public paginator!: MatPaginator;
  public sort!: MatSort;
  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(): void {
    this.leavesservice
      .fetchLeavesByStudentId(this.studentId)
      .subscribe((data) => {
        this.Leaves = data;

        this.dataSource.data = data;
      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
