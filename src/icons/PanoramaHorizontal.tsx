import * as React from "react";
import type { SVGProps } from "react";
const SvgPanoramaHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#panorama-horizontal_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.338 5.53q7.658 2.898 15.317 0A1 1 0 0 1 21 6.464v11c0 .692-.692 1.2-1.34.962q-7.66-2.898-15.321 0A.993.993 0 0 1 3 17.491V6.464a1 1 0 0 1 1.338-.935z"
      />
    </g>
    <defs>
      <clipPath id="panorama-horizontal_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPanoramaHorizontal;
