import * as React from "react";
import type { SVGProps } from "react";
const SvgHexagons = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#hexagons_svg__a)"
    >
      <path d="M4 18v-5l4-2 4 2v5l-4 2zM8 11V6l4-2 4 2v5M12 13l4-2 4 2v5l-4 2-4-2" />
    </g>
    <defs>
      <clipPath id="hexagons_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHexagons;
