import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-dynamic-elements',
  templateUrl: './dynamic-elements.component.html',
  styleUrls: ['./dynamic-elements.component.css']
})
export class DynamicElementsComponent implements OnInit {

  @Input() childObject;
  

  constructor() { }

  ngOnInit() {
    if (this.childObject.inlineEntityRanges.length) {
      for (let ele of this.childObject.inlineEntityRanges) {
        if (ele.type == "LINK") {
          this.childObject.text = ([this.childObject.text.slice(0, ele.offset-1), "<a href='" + ele.data.url + "'>", this.childObject.text.slice(ele.offset - 1, ele.offset-1 + ele.length), "</a>", this.childObject.text.slice(ele.offset-1 + ele.length, this.childObject.text.length)].join('')); 
        }
      }
    }
  }

}
