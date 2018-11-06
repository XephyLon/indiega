import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  Renderer2,
  ViewChild
} from "@angular/core";
import { MatToolbar } from "@angular/material";
import { DOCUMENT } from "@angular/common";
import { WINDOW } from "../window.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.sass"]
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild("navBar")
  private navbar: MatToolbar;
  @ViewChild('logo')
  private logo: ElementRef
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window,
    public renderer: Renderer2
  ) {}

  links = [
    { title: "homepage", router: "/", hasDropdown: false },
    { title: "about", router: "", hasDropdown: true },
    { title: "gallery", router: "/gallery", hasDropdown: false },
    { title: "games", router: "/games", hasDropdown: false },
    { title: "blog", router: "/blog", hasDropdown: false },
    { title: "contact us", router: "/contact-us", hasDropdown: false }
  ];

  dropdown = [
    { title: "About Us", router: "/about-us" },
    { title: "FAQ", router: "/about-us" },
    { title: "Team", router: "/about-us" },
    { title: "Confession Corner", router: "/confessions" }
  ];

  @HostListener("window:scroll", [])
  onScroll(): void {
    const offset =
      this.window.pageYOffset ||
      this.document.documentElement.scrollTop ||
      this.document.body.scrollTop ||
      0;
    const navBar = this.navbar._elementRef.nativeElement
    const _logo = this.logo.nativeElement
    if (offset > 1) {
      this.renderer.addClass(navBar, 'scrolled')
      this.renderer.addClass(_logo, 'logo-scrolled')
    } else {
      this.renderer.removeClass(navBar, 'scrolled')
      this.renderer.removeClass(_logo, 'logo-scrolled')
    }
  }

  ngAfterViewInit(): void {}
}
