import * as React from "react";
import type { SVGProps } from "react";
const SvgWorldHeartIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#world-heart-icon_svg__a)"
    >
      <path d="M21 12a9 9 0 1 0-9.679 8.974M3.602 9h16.8M3.602 15h6.9" />
      <path d="M11.5 3a17 17 0 0 0 0 18M12.5 3c1.53 2.45 2.41 5.25 2.556 8.136M18 22l3.35-3.284a2.14 2.14 0 0 0 .005-3.071 2.24 2.24 0 0 0-3.129-.006l-.224.22-.223-.22a2.24 2.24 0 0 0-3.128-.006 2.143 2.143 0 0 0-.006 3.07z" />
    </g>
    <defs>
      <clipPath id="world-heart-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWorldHeartIcon;
