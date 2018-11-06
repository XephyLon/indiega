import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-faq",
  templateUrl: "./faq.component.html",
  styleUrls: ["./faq.component.sass"]
})
export class FaqComponent implements OnInit {
  faqs = [
    {
      title: "Bresaola hamburger sirloin?",
      text:
        "Flank andouille leberkas, shoulder shankle prosciutto chicken corned beef cupim kevin ham buffalo. Cow short ribs shoulder pancetta alcatra pork chop. "
    },
    {
      title: "Filet mignon rump doner landjaeger?",
      text:
        "Beef ribs meatloaf andouille tail pork belly bresaola tenderloin. Sirloin shank filet mignon rump. Jerky drumstick meatloaf sirloin ball tip landjaeger. "
    },
    {
      title: "Capicola jerky turducken meatloaf?",
      text:
        "Meatloaf shank corned beef rump, alcatra chicken bacon turducken tongue. Burgdoggen drumstick short loin tongue shankle shank. Pig salami pancetta. "
    },
    {
      title: "Meatloaf leberkas short loin?",
      text: "Beef leberkas drumstick jowl flank burgdoggen strip steak shoulder. Shankle tri-tip spare ribs turkey beef ribs fatback buffalo t-bone tail flank. "
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
