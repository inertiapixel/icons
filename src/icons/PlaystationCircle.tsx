import * as React from "react";
import type { SVGProps } from "react";
const SvgPlaystationCircle = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#playstation-circle_svg__a)"
    >
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18" />
      <path d="M7.5 12a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0" />
    </g>
    <defs>
      <clipPath id="playstation-circle_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlaystationCircle;
