import * as React from "react";
import type { SVGProps } from "react";
const SvgWorldUpIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#world-up-icon_svg__a)"
    >
      <path d="M20.985 12.521a9 9 0 1 0-8.451 8.463M3.602 9h16.8M3.602 15h10.9" />
      <path d="M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 2.391 11.512M19 22v-6M22 19l-3-3-3 3" />
    </g>
    <defs>
      <clipPath id="world-up-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWorldUpIcon;
