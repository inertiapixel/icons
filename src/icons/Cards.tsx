import * as React from "react";
import type { SVGProps } from "react";
const SvgCards = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#cards_svg__a)">
      <path d="m10.346 3.17-7.15 3.113a2 2 0 0 0-1.03 2.608l4.92 11.895a1.96 1.96 0 0 0 2.59 1.063l7.142-3.11a2 2 0 0 0 1.036-2.61l-4.92-11.895a1.96 1.96 0 0 0-2.588-1.064M15.999 3a2 2 0 0 1 1.995 1.85l.005.15v3.5a1 1 0 0 1-1.993.117l-.007-.117V5h-1a1 1 0 0 1-.117-1.993L14.999 3zM19.079 5.609a1 1 0 0 1 1.31-.53c.256.108.505.21.768.314a2 2 0 0 1 1.114 2.479l-.056.146-2.297 5.374a1 1 0 0 1-1.878-.676l.04-.11 2.296-5.371-.367-.148-.401-.167a1 1 0 0 1-.53-1.312z" />
    </g>
    <defs>
      <clipPath id="cards_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCards;
