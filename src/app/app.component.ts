import { BreadcrumbService } from "./global/breadcrumb/breadcrumb.service";
import { LinksService } from "./shared/links.service";
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { BreadCrumb } from "./global/breadcrumb/breadcrumb.interface";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";
import { Links } from "./shared/links.model";
import { MatSidenav } from "@angular/material";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"],
  providers: [LinksService]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('sideNav') public sideNav: MatSidenav
  public breadcrumbs: Array<BreadCrumb>;
  public links: Array<Links>;
  private root: ActivatedRoute = this.route.root;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private breadcrumbService: BreadcrumbService,
    private linkService: LinksService
  ) {}

  ngAfterViewInit(): void {
    this.router.events
      .pipe(filter(ev => ev instanceof NavigationEnd))
      .subscribe(() => {
        const breadcrumb: BreadCrumb = { label: "Home", url: "" };
        this.breadcrumbs = this.breadcrumbService.getBreadCrumbs(this.root);
        this.breadcrumbs = [breadcrumb, ...this.breadcrumbs];

        return this.breadcrumbs;
      });
    this.linkService.getLinks()
      .then(links => (this.links = links))
  }

  getCrumbs(): Promise<Array<BreadCrumb>> {
    return Promise.resolve(this.breadcrumbs)
  }
}
