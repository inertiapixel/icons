import * as React from "react";
import type { SVGProps } from "react";
const SvgIceCream = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#ice-cream_svg__a)"
    >
      <path d="M12 21.5V17M8 17h8V7a4 4 0 1 0-8 0zM8 10.5 16 7M8 14.5l8-3.5" />
    </g>
    <defs>
      <clipPath id="ice-cream_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIceCream;
