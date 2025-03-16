import * as React from "react";
import type { SVGProps } from "react";
const SvgWorldShareIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#world-share-icon_svg__a)"
    >
      <path d="M20.94 13.045A9 9 0 1 0 11.985 21M3.602 9h16.8M3.602 15h9.4" />
      <path d="M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 2.529 10.294M16 22l5-5M21 21.5V17h-4.5" />
    </g>
    <defs>
      <clipPath id="world-share-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWorldShareIcon;
