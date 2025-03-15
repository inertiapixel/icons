import * as React from "react";
import type { SVGProps } from "react";
const SvgRubberStamp = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#rubber-stamp_svg__a)"
    >
      <path d="M21 17.85H3c0-4.05 1.421-4.05 3.79-4.05C12 13.8 8 9.21 8 7a4 4 0 0 1 8 0c0 2.21-4 6.8 1.21 6.8 2.369 0 3.79 0 3.79 4.05M5 21h14" />
    </g>
    <defs>
      <clipPath id="rubber-stamp_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRubberStamp;
