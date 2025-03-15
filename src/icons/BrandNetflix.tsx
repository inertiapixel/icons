import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandNetflix = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-netflix_svg__a)"
    >
      <path d="m9 3 10 18h-4L5 3zM5 3v18h4V10.5M19 21V3h-4v10.5" />
    </g>
    <defs>
      <clipPath id="brand-netflix_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandNetflix;
