import { BreadCrumb } from "./breadcrumb.interface";
import { Component, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  NavigationEnd,
  PRIMARY_OUTLET,
  Router
} from "@angular/router";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
  styleUrls: ["./breadcrumb.component.sass"]
})
export class BreadcrumbComponent implements OnInit {
  public breadcrumbs: Array<BreadCrumb>;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const breadcrumb: BreadCrumb = {
      label: "Home",
      url: ""
    };

    this.router.events
      .pipe(filter(ev => ev instanceof NavigationEnd))
      .subscribe(() => {
        const root: ActivatedRoute = this.route.root;
        this.breadcrumbs = this.getBreadCrumbs(root);
        this.breadcrumbs = [breadcrumb, ...this.breadcrumbs];
      });
  }

  getBreadCrumbs(
    route: ActivatedRoute,
    url: string = "",
    breadcrumbs: Array<BreadCrumb> = []
  ): Array<BreadCrumb> {
    const ROUTE_DATA_BREADCRUMB = "breadcrumb";

    const CHILDREN: Array<ActivatedRoute> = route.children;

    if (CHILDREN.length === 0) { return breadcrumbs; }

    for (const child of CHILDREN) {
      if (child.outlet !== PRIMARY_OUTLET || child.snapshot.url.length === 0) {
        continue;
      }

      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadCrumbs(child, url, breadcrumbs);
      }

      const ROUTE_URL: string = child.snapshot.url
        .map(segment => segment.path)
        .join("/");

      url += `/${ROUTE_URL}`;

      const breadcrumb: BreadCrumb = {
        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
        url
      };

      breadcrumbs.push(breadcrumb);

      // recursive
      return this.getBreadCrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }

  // TODO: Don't forget to implement ngOnDestroy to ubsubscribe
}
