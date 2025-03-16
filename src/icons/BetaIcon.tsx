import * as React from "react";
import type { SVGProps } from "react";
const SvgBetaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#beta-icon_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 22V8a4 4 0 0 1 4-4h.5a3.5 3.5 0 1 1 0 7m0 0H12m.5 0A4.5 4.5 0 1 1 8 15.5V15"
      />
    </g>
    <defs>
      <clipPath id="beta-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBetaIcon;
