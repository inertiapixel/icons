import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeHeartIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#home-heart-icon_svg__a)"
    >
      <path d="m21 12-9-9-9 9h2v7a2 2 0 0 0 2 2h6" />
      <path d="M9 21v-6a2 2 0 0 1 2-2h2c.39 0 .754.112 1.061.304M19 21.5l2.518-2.58a1.74 1.74 0 0 0 0-2.413 1.626 1.626 0 0 0-2.346 0l-.168.172-.168-.172a1.626 1.626 0 0 0-2.346 0 1.74 1.74 0 0 0 0 2.412L19 21.51z" />
    </g>
    <defs>
      <clipPath id="home-heart-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHomeHeartIcon;
