import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeShieldIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#home-shield-icon_svg__a)"
    >
      <path d="M9 21v-6a2 2 0 0 1 2-2h1.341" />
      <path d="M19.682 10.682 12 3l-9 9h2v7a2 2 0 0 0 2 2h5" />
      <path d="M22 16c0 4-2.5 6-3.5 6S15 20 15 16c1 0 2.5-.5 3.5-1.5 1 1 2.5 1.5 3.5 1.5" />
    </g>
    <defs>
      <clipPath id="home-shield-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHomeShieldIcon;
