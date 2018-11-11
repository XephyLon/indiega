import { Injectable } from "@angular/core";
import { BreadCrumb } from "./breadcrumb.interface";
import { ActivatedRoute, PRIMARY_OUTLET } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class BreadcrumbService {
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
}
