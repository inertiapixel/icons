import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandXing = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-xing_svg__a)"
    >
      <path d="m16 21-4-7 6.5-11M7 7l2 3.5L6 15" />
    </g>
    <defs>
      <clipPath id="brand-xing_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandXing;
