import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandMonday = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-monday_svg__a)"
    >
      <path d="M18 15.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0M9.5 7a1.5 1.5 0 0 1 1.34 2.177l-4.035 7.074c-.264.447-.75.749-1.305.749a1.5 1.5 0 0 1-1.27-2.297l3.905-6.827A1.5 1.5 0 0 1 9.5 7M16.5 7a1.5 1.5 0 0 1 1.34 2.177l-4.035 7.074c-.264.447-.75.749-1.305.749a1.5 1.5 0 0 1-1.27-2.297l3.905-6.827A1.5 1.5 0 0 1 16.5 7" />
    </g>
    <defs>
      <clipPath id="brand-monday_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandMonday;
