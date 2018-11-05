import { BreadCrumb } from "./breadcrumb.interface";
import { Component, OnInit } from "@angular/core";
import {
  Router,
  ActivatedRoute,
  NavigationEnd,
  PRIMARY_OUTLET
} from "@angular/router";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
  styleUrls: ["./breadcrumb.component.sass"]
})
export class BreadcrumbComponent implements OnInit {
  public breadcrumbs: BreadCrumb[];
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    let breadcrumb: BreadCrumb = {
      label: "Home",
      url: ""
    };

    this.router.events
      .pipe(filter(ev => ev instanceof NavigationEnd))
      .subscribe(() => {
        let root: ActivatedRoute = this.route.root;
        this.breadcrumbs = this.getBreadCrumbs(root);
        this.breadcrumbs = [breadcrumb, ...this.breadcrumbs];
      });
  }

  private getBreadCrumbs(
    route: ActivatedRoute,
    url: string = "",
    breadcrumbs: BreadCrumb[] = []
  ): BreadCrumb[] {
    const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";

    let children: ActivatedRoute[] = route.children;

    if (children.length === 0) return breadcrumbs;

    for (let child of children) {
      if (child.outlet !== PRIMARY_OUTLET || child.snapshot.url.length === 0) {
        continue;
      }

      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadCrumbs(child, url, breadcrumbs);
      }

      let routeURL: string = child.snapshot.url
        .map(segment => segment.path)
        .join("/");

      url += `/${routeURL}`;

      let breadcrumb: BreadCrumb = {
        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
        url: url
      };

      breadcrumbs.push(breadcrumb);

      //recursive
      return this.getBreadCrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }

  // TODO: Don't forget to implement ngOnDestroy to ubsubscribe
}
