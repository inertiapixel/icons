import * as React from "react";
import type { SVGProps } from "react";
const SvgTextureIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#texture-icon_svg__a)"
    >
      <path d="M6 3 3 6M21 18l-3 3M11 3l-8 8M16 3 3 16M21 3 3 21M21 8 8 21M21 13l-8 8" />
    </g>
    <defs>
      <clipPath id="texture-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTextureIcon;
