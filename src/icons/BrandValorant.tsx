import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandValorant = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-valorant_svg__a)"
    >
      <path d="M14.5 14H19l2-2V6zM9 19h5L3 6v6z" />
    </g>
    <defs>
      <clipPath id="brand-valorant_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandValorant;
