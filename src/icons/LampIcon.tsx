import * as React from "react";
import type { SVGProps } from "react";
const SvgLampIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#lamp-icon_svg__a)"
    >
      <path d="M9 20h6M12 20v-8M5 12h14l-4-8H9z" />
    </g>
    <defs>
      <clipPath id="lamp-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLampIcon;
