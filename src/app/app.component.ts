import { LinksService } from './shared/links.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [LinksService]
})
export class AppComponent {
}
