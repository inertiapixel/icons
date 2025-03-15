import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsDoubleNwSe = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrows-double-nw-se_svg__a)"
    >
      <path d="M14 21 3 10M3 14v-4h4M17 14h4v-4M10 3l11 11" />
    </g>
    <defs>
      <clipPath id="arrows-double-nw-se_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowsDoubleNwSe;
