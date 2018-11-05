import { BreadCrumb } from "./breadcrumb.interface";
import { Component, ViewEncapsulation } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { filter, distinctUntilChanged, map, startWith } from "rxjs/operators";

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
  styleUrls: ["./breadcrumb.component.sass"],
  encapsulation: ViewEncapsulation.None
})
export class BreadcrumbComponent {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  breadCrumbs$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    distinctUntilChanged(),
    map(() => this.buildBreadCrumb(this.activatedRoute.root)),
    startWith(this.buildBreadCrumb(this.activatedRoute.root))
  );

  buildBreadCrumb(
    route: ActivatedRoute,
    url?: string,
    breadcrumbs?: Array<BreadCrumb>
  ): Array<BreadCrumb> {
    const label = route.routeConfig
      ? route.routeConfig.data["breadcrumb"]
      : "Home";
    const path = route.routeConfig ? route.routeConfig.path : "";
    const nextUrl = `${url}${path}/`;
    const breadcrumb = {
      label: label,
      url: nextUrl
    };
    const newBreadCrumbs = [...breadcrumbs, breadcrumb];
    if (route.firstChild) {
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadCrumbs);
    }
    return newBreadCrumbs;
  }
}
