import * as React from "react";
import type { SVGProps } from "react";
const SvgSunLow = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#sun-low_svg__a)"
    >
      <path d="M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0M4 12h.01M12 4v.01M20 12h.01M12 20v.01M6.31 6.31 6.3 6.3M17.71 6.31l-.01-.01M17.7 17.7l.01.01M6.3 17.7l.01.01" />
    </g>
    <defs>
      <clipPath id="sun-low_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSunLow;
