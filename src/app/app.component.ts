import { BreadcrumbService } from './global/breadcrumb/breadcrumb.service';
import { LinksService } from './shared/links.service';
import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from './global/breadcrumb/breadcrumb.interface';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"],
  providers: [LinksService]
})
export class AppComponent implements OnInit {
  public breadcrumbs: Array<BreadCrumb>;

  constructor(private route: ActivatedRoute, private router: Router, private breadcrumbService: BreadcrumbService) {}
  ngOnInit(): void {
    const breadcrumb: BreadCrumb = { label: "Home", url: "" };
    this.router.events
      .pipe(
        filter(ev => ev instanceof NavigationEnd)
      )
      .subscribe(() => {
        const root: ActivatedRoute = this.route.root;
        this.breadcrumbs = this.breadcrumbService.getBreadCrumbs(root);
        this.breadcrumbs = [breadcrumb, ...this.breadcrumbs];
      });
    console.log(this.breadcrumbs);
  }
}
