import { Component, OnInit } from '@angular/core';
import { faFacebook, faGoogle, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  icons = [
    faFacebook,
    faGoogle,
    faYoutube,
    faTwitter
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
