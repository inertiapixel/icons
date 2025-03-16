import * as React from "react";
import type { SVGProps } from "react";
const SvgBallAmericanFootballIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#ball-american-football-icon_svg__a)"
    >
      <path d="m15 9-6 6M10 12l2 2M12 10l2 2M8 21a5 5 0 0 0-5-5" />
      <path d="M16 3C8.82 3 3 8.82 3 16a5 5 0 0 0 5 5c7.18 0 13-5.82 13-13a5 5 0 0 0-5-5" />
      <path d="M16 3a5 5 0 0 0 5 5" />
    </g>
    <defs>
      <clipPath id="ball-american-football-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBallAmericanFootballIcon;
