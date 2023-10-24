import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tooltip-stable',
  templateUrl: './custom-tooltip.component.html',
  styleUrls: ['./custom-tooltip.component.scss']
})
export class CustomTooltipComponent implements OnInit {
  @Input() message: any = 'Some Message'
  @Input() type: 'info' | 'warn' = 'warn'
  constructor() { }

  ngOnInit(): void {
  }

}
