import * as React from "react";
import type { SVGProps } from "react";
const SvgBellUpIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bell-up-icon_svg__a)"
    >
      <path d="M12.5 17H4a4 4 0 0 0 2-3v-3a7 7 0 0 1 4-6 2 2 0 1 1 4 0 7 7 0 0 1 4 6v1M9 17v1a3 3 0 0 0 3.49 2.96M19 22v-6M22 19l-3-3-3 3" />
    </g>
    <defs>
      <clipPath id="bell-up-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBellUpIcon;
