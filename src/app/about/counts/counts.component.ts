import { Component, OnInit } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faGlobeAmericas, faTrophy, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: "app-counts",
  templateUrl: "./counts.component.html",
  styleUrls: ["./counts.component.sass"]
})
export class CountsComponent implements OnInit {
  features = [
    { icon: faThumbsUp, h3: "1,2356" , h4: 'happy clients'},
    { icon: faTrophy, h3: "2356", h4: 'WON AWARDS'},
    { icon: faUsers, h3: "356", h4: 'TOTAL GAMERS'},
    { icon: faGlobeAmericas, h3: "56", h4: 'COUNTRIES-PLAYERS'}
];

  constructor() {}

  ngOnInit(): void {}
}
