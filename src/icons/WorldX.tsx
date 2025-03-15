import * as React from "react";
import type { SVGProps } from "react";
const SvgWorldX = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#world-x_svg__a)"
    >
      <path d="M20.929 13.131A9 9 0 1 0 11.998 21M3.602 9h16.8M3.602 15h9.9" />
      <path d="M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 2.505 10.573M22 22l-5-5M17 22l5-5" />
    </g>
    <defs>
      <clipPath id="world-x_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWorldX;
