import { ConfessionsService } from '../shared/services/confessions.service';
import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { Confession } from '../shared/models/confessions.model';

@Component({
  selector: "app-testimonials",
  templateUrl: "./testimonials.component.html",
  styleUrls: ["./testimonials.component.sass"]
})
export class TestimonialsComponent implements OnInit {
  confessions: Array<Confession> = []
  constructor(private confessionService: ConfessionsService) {}

  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 2, lg: 2, all: 0 },
    speed: 800,
    point: {
      visible: true
    },
    touch: true,
    loop: true,
    interval: { timing: 5000 },
    animation: "lazy"
  };

  ngOnInit(): void {
    this.confessionService.getConfessions()
      .then(confessions => this.confessions = confessions)
  }
}
