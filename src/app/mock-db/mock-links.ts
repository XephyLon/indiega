import { Links } from "../shared/links.model";

export const LINKS: Array<Links> = [
  { title: "homepage", router: "/", hasDropdown: false },
  { title: "about", router: "", hasDropdown: true },
  { title: "gallery", router: "/gallery", hasDropdown: false },
  { title: "games", router: "/games", hasDropdown: false },
  { title: "blog", router: "/blog", hasDropdown: false },
  { title: "contact us", router: "/contact-us", hasDropdown: false }
];

export const DROPDOWN_LINKS: Array<Links> = [
  { title: "About Us", router: "/about-us" },
  { title: "FAQ", router: "/faq" },
  { title: "Team", router: "/about-us" },
  { title: "Confession Corner", router: "/confessions" }
];
