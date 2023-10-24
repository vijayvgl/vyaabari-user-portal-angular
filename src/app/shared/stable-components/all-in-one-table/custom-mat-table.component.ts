import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
function checkNull(data: any) {
  return (data != null)
    && (data != undefined)
    && (data != '')
    && ((Array.isArray(data) ? data.length > 0 : true))
   
}

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'mat-table-custom',
  templateUrl: './custom-mat-table.component.html',
  styleUrls: ['./custom-mat-table.component.scss'],

})
export class CustomMatTableComponent implements OnInit, OnChanges {
  @Input() response: any
  @Input() columns: { key: string, label: any, sorting: boolean, isLabel: boolean, isVerbutton: boolean, class: any, width: any }[]
  @Input() pageOptions: any[]
  @Input() needPagination: boolean = false
  @Input() pageSize: any = 10

  @Input() tableClass: any = ''
  @Input() status: any[] = []
  @Input() buttonList: any[] = []

  @Output() onSorting: EventEmitter<any> = new EventEmitter()
  @Output() onPaginating: EventEmitter<any> = new EventEmitter()
  @Output() onClicking: EventEmitter<any> = new EventEmitter()

  tableSource: MatTableDataSource<any>
  displayedColumns: any[]

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    this.tableSource = new MatTableDataSource(this.response ?? []);
    this.displayedColumns = this.columns.map((ele) => ele.key)
  }

  checkNull(data) {
    return checkNull(data)
  }
  sortData(event: any) {
    this.onSorting.emit(event)
  }
  paginateData(event: MatPaginator) {
    this.onPaginating.emit({ index: event.pageIndex, size: event.pageSize, length: event.length })
  }
  async navigate(data: any, routerLink: any, paramKey?: any, query?: any) {
    let obj: any = {}
    console.log(query)
    query.forEach((ele: any) => {
      obj[ele.key] = data[ele?.value]
    })
    let url = !checkNull(paramKey) ? `/${routerLink}` : `/${routerLink}/${data[paramKey]}`;
    this.router.navigate([`${url}`], { queryParams: obj })
  }
  returnStatus(data) {
    return this.status.find((ele: any) => (ele.status == data))
  }
  emitButton(action, id) {
    this.onClicking.emit({ action: action, id: id })
  }

}
