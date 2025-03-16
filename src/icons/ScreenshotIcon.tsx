import * as React from "react";
import type { SVGProps } from "react";
const SvgScreenshotIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#screenshot-icon_svg__a)"
    >
      <path d="M7 19a2 2 0 0 1-2-2M5 13v-2M5 7a2 2 0 0 1 2-2M11 5h2M17 5a2 2 0 0 1 2 2M19 11v2M19 17v4M21 19h-4M13 19h-2" />
    </g>
    <defs>
      <clipPath id="screenshot-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgScreenshotIcon;
