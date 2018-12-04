import { LinksService } from "../shared/services/links.service";
import { Links } from "../shared/models/links.model";
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
  Renderer2,
  ViewChild
} from "@angular/core";
import { MatSidenav, MatToolbar } from "@angular/material";
import { DOCUMENT } from "@angular/common";
import { WINDOW } from "../shared/services/window.service";
import { AppComponent } from "../app.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.sass"]
})

export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild("navBar") navbar: MatToolbar;
  @ViewChild("logo") logo: ElementRef;

  links: Array<Links> = [];
  dropdown: Array<Links> = [];
  sidenav: MatSidenav

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window,
    public renderer: Renderer2,
    private linksService: LinksService,
    private appComponent: AppComponent
  ) {}

  // On Scroll function to dynamically add/remove CSS classes
  @HostListener("window:scroll", []) onScroll(): void {
    const offset =
      this.window.pageYOffset ||
      this.document.documentElement.scrollTop ||
      this.document.body.scrollTop ||
      0;
    const navBar = this.navbar._elementRef.nativeElement;
    const _logo = this.logo.nativeElement;
    if (offset > 1) {
      this.renderer.addClass(navBar, "scrolled");
      this.renderer.addClass(_logo, "logo-scrolled");
    } else {
      this.renderer.removeClass(navBar, "scrolled");
      this.renderer.removeClass(_logo, "logo-scrolled");
    }
  }

  ngOnInit(): void {
    this.linksService
      .getLinks()
      .then(links => (this.links = links));
    this.linksService
      .getDropdownLinks()
      .then(dropdown => (this.dropdown = dropdown));
  }

  ngAfterViewInit(): void {
    this.sidenav = this.appComponent.sideNav
  }
}
