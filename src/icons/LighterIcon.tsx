import * as React from "react";
import type { SVGProps } from "react";
const SvgLighterIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#lighter-icon_svg__a)"
    >
      <path d="M10 3v16a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-7H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
      <path d="m16 4 1.464 1.638a2 2 0 1 1-3.015.099z" />
    </g>
    <defs>
      <clipPath id="lighter-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLighterIcon;
