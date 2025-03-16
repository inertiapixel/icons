import * as React from "react";
import type { SVGProps } from "react";
const SvgAnchorIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#anchor-icon_svg__a)"
    >
      <path d="M12 9v12m0 0a8 8 0 0 1-8-8m8 8a8 8 0 0 0 8-8m1 0h-2M5 13H3M9 6a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
    </g>
    <defs>
      <clipPath id="anchor-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAnchorIcon;
