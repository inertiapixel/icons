import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeEcoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#home-eco-icon_svg__a)"
    >
      <path d="m20 11-8-8-9 9h2v7a2 2 0 0 0 2 2h5" />
      <path d="M9 21v-6a2 2 0 0 1 2-2h2c.325 0 .631.077.902.215M16 22s0-2 3-4" />
      <path d="M19 21a3 3 0 0 1 0-6h3v3a3 3 0 0 1-3 3" />
    </g>
    <defs>
      <clipPath id="home-eco-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHomeEcoIcon;
