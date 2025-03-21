import * as React from "react";
import type { SVGProps } from "react";
const SvgLetterASmallIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#letter-a-small-icon_svg__a)"
    >
      <path d="M10 16v-6a2 2 0 1 1 4 0v6M10 13h4" />
    </g>
    <defs>
      <clipPath id="letter-a-small-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLetterASmallIcon;
