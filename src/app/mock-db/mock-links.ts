import { Links } from "../shared/models/links.model";

export const LINKS: Array<Links> = [
  { title: "homepage", router: "/", hasDropdown: false },
  { title: "about", router: "/about-us", hasDropdown: false },
  { title: "gallery", router: "/gallery", hasDropdown: false },
  { title: "FAQ", router: "/faq", hasDropdown: false },
  { title: "Confession Corner", router: "/confessions", hasDropdown: false }
  // { title: "games", router: "/games", hasDropdown: false },
  // { title: "blog", router: "/blog", hasDropdown: false },
  // { title: "contact us", router: "/contact-us", hasDropdown: false }
];

export const DROPDOWN_LINKS: Array<Links> = [
  { title: "About Us", router: "/about-us" },
  { title: "FAQ", router: "/faq" },
  // { title: "Team", router: "/about-us" },
  { title: "Confession Corner", router: "/confessions" }
];
