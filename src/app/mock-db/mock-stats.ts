import { Features } from "../shared/stats.model";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faGlobeAmericas, faTrophy, faUsers } from "@fortawesome/free-solid-svg-icons";

export const STATS: Array<Features> = [
  { icon: faThumbsUp, count: 12356, source: 'happy clients' },
  { icon: faTrophy, count: 2356, source: 'WON AWARDS' },
  { icon: faUsers, count: 356, source: 'TOTAL GAMERS' },
  { icon: faGlobeAmericas, count: 56, source: 'COUNTRIES-PLAYERS' }
];
