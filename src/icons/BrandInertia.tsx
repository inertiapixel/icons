import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandInertia = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-inertia_svg__a)"
    >
      <path d="m12.5 8 4 4-4 4H17l4-4-4-4zM3.5 8l4 4-4 4H8l4-4-4-4z" />
    </g>
    <defs>
      <clipPath id="brand-inertia_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandInertia;
