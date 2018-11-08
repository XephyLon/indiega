import { CoreService } from './../shared/core.service';
import { Component, OnInit } from '@angular/core';
import { CoreValues } from '../shared/core.model';

@Component({
  selector: `app-core`,
  templateUrl: `./core.component.html`,
  styleUrls: [`./core.component.sass`]
})
export class CoreComponent implements OnInit {
  isOpened: boolean
  coreValues: Array<CoreValues> = []
  constructor(private coreService: CoreService) { }

  trackByFn(index): number {
    return index
  }

  ngOnInit(): void {
    this.coreService
      .getCore()
      .then(core => this.coreValues = core) // TODO: Don't forget to call the server.
  }

}
