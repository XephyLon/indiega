import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  links = [
    {title: 'homepage', router: '/', hasDropdown: false},
    {title: 'about', router: '', hasDropdown: true},
    {title: 'gallery', router: '/gallery', hasDropdown: false},
    {title: 'games', router: '/games', hasDropdown: false},
    {title: 'blog', router: '/blog', hasDropdown: false},
    {title: 'contact us', router: '/contact-us', hasDropdown: false}
  ]

  dropdown = [
    { title: 'About Us', router: '/about-us' },
    { title: 'FAQ', router: '/about-us' },
    { title: 'Team', router: '/about-us' },
    { title: 'Confession Corner', router: '/confessions' }
  ]

  ngOnInit() {
  }

}
