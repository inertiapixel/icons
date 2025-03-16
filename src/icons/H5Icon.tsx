import * as React from "react";
import type { SVGProps } from "react";
const SvgH5Icon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#h-5-icon_svg__a)"
    >
      <path d="M17 18h2a2 2 0 0 0 0-4h-2v-4h4M4 6v12M12 6v12M11 18h2M3 18h2M4 12h8M3 6h2M11 6h2" />
    </g>
    <defs>
      <clipPath id="h-5-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgH5Icon;
