import { BreadCrumb } from "./breadcrumb.interface";
import { Component, OnDestroy, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  NavigationEnd,
  PRIMARY_OUTLET,
  Router
} from "@angular/router";
import { filter, takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
  styleUrls: ["./breadcrumb.component.sass"]
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  public breadcrumbs: Array<BreadCrumb>;
  private unsubscribe: Subject<void> = new Subject();
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const breadcrumb: BreadCrumb = {
      label: "Home",
      url: ""
    };
    this.router.events
      .pipe(
        takeUntil(this.unsubscribe),
        filter(ev => ev instanceof NavigationEnd)
      )
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

    if (CHILDREN.length === 0) {
      return breadcrumbs;
    }

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

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
