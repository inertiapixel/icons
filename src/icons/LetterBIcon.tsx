import * as React from "react";
import type { SVGProps } from "react";
const SvgLetterBIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#letter-b-icon_svg__a)"
    >
      <path d="M7 20V4h6a4 4 0 1 1 0 8 4 4 0 1 1 0 8zM7 12h6" />
    </g>
    <defs>
      <clipPath id="letter-b-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLetterBIcon;
