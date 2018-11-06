import { Component, Input, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-hero-carousel',
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.sass']
})
export class HeroCarouselComponent implements OnInit {
  @Input() name: string
  tiles = [
    {
      title: 'Title Sample #1',
      subtitle: 'Subtitle Sample #1',
      text: 'Text Sample #1',
      image: 'assets/images/slide-1.jpg',
      buttonText: 'Button Sample #1'
    },
    {
      title: 'Title Sample #2',
      subtitle: 'Subtitle Sample #2',
      text: 'Text Sample #2',
      image: 'assets/images/slide-2.jpg',
      buttonText: 'Button Sample #2'
    },
    {
      title: 'Title Sample #3',
      subtitle: 'Subtitle Sample #3',
      text: 'Text Sample #3',
      image: 'assets/images/slide-3.jpg',
      buttonText: 'Button Sample #3'
    }
  ]

  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    speed: 800,
    point: {
      visible: true
    },
    touch: true,
    loop: true,
    interval: { timing: 5000 },
    animation: 'lazy'
  }

  constructor() { }

  ngOnInit(): void {

  }

}
