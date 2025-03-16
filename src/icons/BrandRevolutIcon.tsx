import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandRevolutIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-revolut-icon_svg__a)"
    >
      <path d="M5 10h3v10H5z" />
      <path d="M14.5 4H5v3h9.4a1.5 1.5 0 0 1 0 3H11v4l4 6h4l-5-7h.5a4.5 4.5 0 1 0 0-9" />
    </g>
    <defs>
      <clipPath id="brand-revolut-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandRevolutIcon;
