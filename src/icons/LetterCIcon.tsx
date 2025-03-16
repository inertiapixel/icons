import * as React from "react";
import type { SVGProps } from "react";
const SvgLetterCIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#letter-c-icon_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 9a5 5 0 0 0-5-5h-2a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h2a5 5 0 0 0 5-5"
      />
    </g>
    <defs>
      <clipPath id="letter-c-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLetterCIcon;
