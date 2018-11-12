import { AppComponent } from "./../app.component";
import { Component, OnInit } from "@angular/core";
import { BreadCrumb } from "../global/breadcrumb/breadcrumb.interface";

@Component({
  selector: "app-title-header",
  templateUrl: "./title-header.component.html",
  styleUrls: ["./title-header.component.sass"]
})
export class TitleHeaderComponent implements OnInit {
  public breadcrumbs: Array<BreadCrumb> = [];
  constructor(private appComponent: AppComponent) {}

  ngOnInit(): void {
    this.appComponent
      .getCrumbs()
      .then(breadcrumbs => (this.breadcrumbs = breadcrumbs));
  }
}
