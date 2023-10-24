import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-icons',
  templateUrl: './svg-icons.component.html',
  styleUrls: ['./svg-icons.component.scss'],
})
export class SvgIconsComponent implements OnInit{

  @Input ('moneytransfer') public moneytransfer :any
  @Input ('current') public current :any
  @Input ('aeps') public aeps :any
  @Input ('report') public report :any
  @Input ('rechargeSvg') public rechargeSvg :any
  @Input ('goldsvg') public goldsvg :any;
  @Input ('menusvg') public menusvg :any
@Input ('reportsvg') public reportsvg : any
@Input ('topupsvg') public topupsvg : any
@Input ('usersvg') public usersvg : any
@Input ('paymentsvg') public paymentsvg:any
  ngOnInit(){
    
  }

}
