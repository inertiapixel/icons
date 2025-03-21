import * as React from "react";
import type { SVGProps } from "react";
const SvgPackagesIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#packages-icon_svg__a)"
    >
      <path d="m7 16.5-5-3 5-3 5 3V19l-5 3z" />
      <path d="M2 13.5V19l5 3M7 16.546l5-3.03M17 16.5l-5-3 5-3 5 3V19l-5 3zM12 19l5 3M17 16.5l5-3" />
      <path d="M12 13.5V8L7 5l5-3 5 3v5.5M7 5.031v5.455M12 8l5-3" />
    </g>
    <defs>
      <clipPath id="packages-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPackagesIcon;
