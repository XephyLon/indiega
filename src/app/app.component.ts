import { BreadcrumbService } from "./global/breadcrumb/breadcrumb.service";
import { LinksService } from "./shared/links.service";
import { Component, OnInit } from "@angular/core";
import { BreadCrumb } from "./global/breadcrumb/breadcrumb.interface";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"],
  providers: [LinksService]
})
export class AppComponent implements OnInit {
  public breadcrumbs: Array<BreadCrumb>;
  private root: ActivatedRoute = this.route.root;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(ev => ev instanceof NavigationEnd))
      .subscribe(() => {
        const breadcrumb: BreadCrumb = { label: "Home", url: "" };
        this.breadcrumbs = this.breadcrumbService.getBreadCrumbs(this.root);
        this.breadcrumbs = [breadcrumb, ...this.breadcrumbs];

        return this.breadcrumbs;
      });
  }

  getCrumbs(): Promise<Array<BreadCrumb>> {
    return Promise.resolve(this.breadcrumbs)
  }
}
