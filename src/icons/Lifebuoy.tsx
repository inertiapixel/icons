import * as React from "react";
import type { SVGProps } from "react";
const SvgLifebuoy = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#lifebuoy_svg__a)"
    >
      <path d="M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0" />
      <path d="M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12M15 15l3.35 3.35M8.998 15l-3.35 3.35M5.648 5.648l3.35 3.35M18.35 5.648 15 8.998" />
    </g>
    <defs>
      <clipPath id="lifebuoy_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLifebuoy;
