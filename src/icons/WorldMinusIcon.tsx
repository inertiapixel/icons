import * as React from "react";
import type { SVGProps } from "react";
const SvgWorldMinusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#world-minus-icon_svg__a)"
    >
      <path d="M20.483 15.007a9 9 0 1 0-7.958 5.978M3.602 9h16.8M3.602 15h16.8" />
      <path d="M11.5 3a17 17 0 0 0 0 18M12.5 3a16.94 16.94 0 0 1 2.307 12M16 19h6" />
    </g>
    <defs>
      <clipPath id="world-minus-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWorldMinusIcon;
