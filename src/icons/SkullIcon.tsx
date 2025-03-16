import * as React from "react";
import type { SVGProps } from "react";
const SvgSkullIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#skull-icon_svg__a)"
    >
      <path d="M12 4c4.418 0 8 3.358 8 7.5 0 1.901-.755 3.637-2 4.96V19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2.54c-1.245-1.322-2-3.058-2-4.96C4 7.358 7.582 4 12 4M10 17v3M14 17v3" />
      <path d="M8 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0M14 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
    </g>
    <defs>
      <clipPath id="skull-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSkullIcon;
