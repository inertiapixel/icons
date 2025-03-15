import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartPause = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#heart-pause_svg__a)"
    >
      <path d="m19.501 12.572-.784.777m-5.725 5.67-.99.98-7.5-7.427a5 5 0 1 1 7.5-6.566 5 5 0 1 1 7.5 6.572M17 17v5M21 17v5" />
    </g>
    <defs>
      <clipPath id="heart-pause_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHeartPause;
