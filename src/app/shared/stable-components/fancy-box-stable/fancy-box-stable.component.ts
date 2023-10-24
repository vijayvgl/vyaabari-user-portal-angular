import { Component, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import { FancyBoxService } from './fancy-box.service';
declare var $: any
@Component({
  selector: 'fancy-box-stable',
  templateUrl: './fancy-box-stable.component.html',
  styleUrls: ['./fancy-box-stable.component.scss']
})
export class FancyBoxStableComponent implements OnInit, OnChanges {
  public images: any[] = []
  constructor(private service: FancyBoxService) { }
  ngOnInit() {
    this.service.getImages().subscribe((res: any) => {
      console.log(res, 'observable')
      this.images = res ?? []
      if (checkNull(this.images)) {
        $('#fancy123').href = this.images[0]
        setTimeout(() => {
          $('#fancy123').click()
        }, 500);

      }

    })
  }

  ngOnChanges(chanegs: any) {

  }

  ngOnDestroy() {

  }

}

function checkNull(value: any) {
  if (value != null && value != undefined && value != '' && value != '[]') {
    return true
  } else {
    return false
  }
}