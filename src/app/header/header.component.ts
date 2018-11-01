import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { MatToolbar } from '@angular/material';


@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.sass"]
})
export class HeaderComponent implements OnInit {
  @ViewChild('navBar') private navbar: MatToolbar
  constructor(public renderer: Renderer2) {}


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

  ngOnInit() {
  }
}
