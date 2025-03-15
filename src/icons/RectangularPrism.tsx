import * as React from "react";
import type { SVGProps } from "react";
const SvgRectangularPrism = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#rectangular-prism_svg__a)"
    >
      <path d="M21 14.009V8.99a1.98 1.98 0 0 0-1-1.717l-4-2.008a2.02 2.02 0 0 0-2 0L4 10.274c-.619.355-1 1.01-1 1.718v5.017c0 .71.381 1.363 1 1.718l4 2.008a2.02 2.02 0 0 0 2 0l10-5.008c.619-.356 1-1.01 1-1.719M9 21v-7.5M9 13.5 20.5 8M3.5 11 9 13.5" />
    </g>
    <defs>
      <clipPath id="rectangular-prism_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRectangularPrism;
