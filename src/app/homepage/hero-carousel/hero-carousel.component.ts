import { Component, OnInit, Input } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { NguCarouselConfig } from '@ngu/carousel';
import { startWith, take, map } from 'rxjs/operators';

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

  public carouselTileItems$: Observable<number[]>
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

  tempData: any[]

  constructor() { }

  ngOnInit() {
    this.tempData = []
    this.carouselTileItems$ = interval(2000).pipe(
      startWith(this.tiles.length - 1),
      take(3),
      map((val) => {
        const data = (this.tempData = [
          ...this.tempData,
          this.tiles[val]
        ])
        return data
      })
    )
  }

}
