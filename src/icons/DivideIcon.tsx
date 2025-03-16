import * as React from "react";
import type { SVGProps } from "react";
const SvgDivideIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#divide-icon_svg__a)"
    >
      <path
        fill="currentColor"
        d="M12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      />
      <path d="M5 12h14" />
    </g>
    <defs>
      <clipPath id="divide-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDivideIcon;
