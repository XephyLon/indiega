import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: "app-testimonials",
  templateUrl: "./testimonials.component.html",
  styleUrls: ["./testimonials.component.sass"]
})
export class TestimonialsComponent {
  blockQuotes = [
    {
      title: "Eiken",
      subtitle: "French DRG",
      // tslint:disable-next-line:max-line-length
      text: `i have to admit that when i was playing i used a boosted service because i had no internet for a month and i was about to loose LP`
    },
    {
      title: "Xephy",
      subtitle: "misses 5th Cleave in IR",
      // tslint:disable-next-line:max-line-length
      text: `I used to believe when I started FFXIV that coeurl minions would grow up to be coeurl mounts.`
    }
  ];

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
}
