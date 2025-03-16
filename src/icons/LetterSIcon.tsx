import * as React from "react";
import type { SVGProps } from "react";
const SvgLetterSIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#letter-s-icon_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 8a4 4 0 0 0-4-4h-2a4 4 0 0 0 0 8h2a4 4 0 1 1 0 8h-2a4 4 0 0 1-4-4"
      />
    </g>
    <defs>
      <clipPath id="letter-s-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLetterSIcon;
