import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandDisney = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-disney_svg__a)"
    >
      <path d="M3.221 5.838c-1.307-.15-1.22-.578-1.22-.794S2.425 4 6.341 4c4.694 0 14.66 3.645 14.66 10.042s-8.71 4.931-10.435 4.52-5.565-2.256-5.565-4.174c0-1.395 3.08-2.388 6.715-2.388s5.285 1.041 5.285 2c0 .5-.074 1.229-1 1.5" />
      <path d="M10.018 8a505 505 0 0 0 0 13" />
    </g>
    <defs>
      <clipPath id="brand-disney_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandDisney;
