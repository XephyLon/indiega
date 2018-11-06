import { Component, Input, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.sass']
})
export class SectionTitleComponent implements OnInit {

  @Input() shadow: string

  constructor() { }

  ngOnInit(): void {
  }

}
