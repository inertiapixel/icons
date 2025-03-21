import * as React from "react";
import type { SVGProps } from "react";
const SvgLetterKIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#letter-k-icon_svg__a)"
    >
      <path d="M7 4v16M7 12h2l8-8M9 12l8 8" />
    </g>
    <defs>
      <clipPath id="letter-k-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLetterKIcon;
