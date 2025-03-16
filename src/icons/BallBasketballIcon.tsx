import * as React from "react";
import type { SVGProps } from "react";
const SvgBallBasketballIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#ball-basketball-icon_svg__a)"
    >
      <path d="M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12M5.648 5.648l12.7 12.7M5.648 18.348l12.7-12.7" />
      <path d="M12 3a9 9 0 0 0 9 9M3 12a9 9 0 0 1 9 9" />
    </g>
    <defs>
      <clipPath id="ball-basketball-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBallBasketballIcon;
