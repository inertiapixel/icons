import * as React from "react";
import type { SVGProps } from "react";
const SvgLetterQIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#letter-q-icon_svg__a)"
    >
      <path d="M18 9a5 5 0 0 0-5-5h-2a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h2a5 5 0 0 0 5-5zM13 15l5 5" />
    </g>
    <defs>
      <clipPath id="letter-q-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLetterQIcon;
