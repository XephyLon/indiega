import { Features } from './../../shared/models/stats.model';
import { StatsService } from '../../shared/services/stats.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-counts",
  templateUrl: "./counts.component.html",
  styleUrls: ["./counts.component.sass"]
})
export class CountsComponent implements OnInit {
  features: Array<Features> = []
  constructor(private statsService: StatsService) {}

  ngOnInit(): void {
    this.statsService
      .getStats()
      .then(features => this.features = features)
  }
}
