import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeRibbonIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#home-ribbon-icon_svg__a)"
    >
      <path d="M16 15h5v7l-2.5-1.5L16 22z" />
      <path d="m20 11-8-8-9 9h2v7a2 2 0 0 0 2 2h5" />
      <path d="M9 21v-6a2 2 0 0 1 2-2h1.5" />
    </g>
    <defs>
      <clipPath id="home-ribbon-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHomeRibbonIcon;
