import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  links = [
    {title: 'homepage', router: '/'},
    {title: 'about', router: ''},
    {title: 'gallery', router: '/gallery'},
    {title: 'games', router: '/games'},
    {title: 'blog', router: '/blog'},
    {title: 'contact us', router: '/contact-us'}
  ]

  ngOnInit() {
  }

}
