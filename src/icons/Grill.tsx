import * as React from "react";
import type { SVGProps } from "react";
const SvgGrill = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#grill_svg__a)"
    >
      <path d="M19 8H5a6 6 0 0 0 6 6h2a6 6 0 0 0 6-5.775zM17 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4M15 14l1 2M9 14l-3 6M15 18H7M15 5V4M12 5V4M9 5V4" />
    </g>
    <defs>
      <clipPath id="grill_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGrill;
