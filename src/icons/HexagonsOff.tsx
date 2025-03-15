import * as React from "react";
import type { SVGProps } from "react";
const SvgHexagonsOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#hexagons-off_svg__a)"
    >
      <path d="M4 18v-5l4-2 4 2v5l-4 2zM8 11V8m1.332-2.666L12 4l4 2v5M12 12.999l.661-.331M15.345 11.328 16 11l4 2v3m-1.334 2.667L16 20l-4-2M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="hexagons-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHexagonsOff;
