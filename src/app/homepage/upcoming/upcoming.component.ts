import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { UpcomingService } from '../../shared/upcoming.service';

@Component({
  selector: "app-upcoming",
  templateUrl: "./upcoming.component.html",
  styleUrls: ["./upcoming.component.sass"]
})
export class UpcomingComponent implements OnInit {
  tiles: Array<Object> = []

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

  tempData: Array<any>;

  constructor(private upcomingService: UpcomingService) {}

  ngOnInit(): void {
    this.upcomingService.getTitles()
      .then(titles => this.tiles = titles)
  }

}
