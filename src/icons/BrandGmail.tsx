import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandGmail = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-gmail_svg__a)"
    >
      <path d="M16 20h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3zM5 20h3V4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1M16 4l-4 4-4-4" />
      <path d="m4 6.5 8 7.5 8-7.5" />
    </g>
    <defs>
      <clipPath id="brand-gmail_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandGmail;
