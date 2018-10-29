import { Component, OnInit, Input } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { NguCarouselConfig } from '@ngu/carousel';
import { startWith, take, map } from 'rxjs/operators';

@Component({
  selector: "app-upcoming",
  templateUrl: "./upcoming.component.html",
  styleUrls: ["./upcoming.component.sass"]
})
export class UpcomingComponent implements OnInit {
  @Input()
  name: string;
  tiles = [
    {
      title: "Title Sample #1",
      date: "Text Sample #1",
      image: "assets/images/game-img-1.jpg"
    },
    {
      title: "Title Sample #2",
      date: "Text Sample #2",
      image: "assets/images/game-img-2.jpg"
    },
    {
      title: "Title Sample #3",
      date: "Text Sample #3",
      image: "assets/images/game-img-3.jpg"
    },
    {
      title: "Title Sample #4",
      date: "Text Sample #4",
      image: "assets/images/game-img-4.jpg"
    }
  ];

  public carouselTileItems$: Observable<number[]>;
  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 3, md: 4, lg: 4, all: 0 },
    speed: 800,
    point: {
      visible: true
    },
    touch: true,
    loop: true,
    interval: { timing: 5000 },
    animation: "lazy"
  };

  tempData: any[];

  constructor() {}

  ngOnInit() {
  }
}
