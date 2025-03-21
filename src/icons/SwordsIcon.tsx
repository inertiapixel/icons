import * as React from "react";
import type { SVGProps } from "react";
const SvgSwordsIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#swords-icon_svg__a)"
    >
      <path d="M21 3v5l-11 9-4 4-3-3 4-4 9-11zM5 13l6 6M14.32 17.322l3.68 3.68 3-3-3.365-3.365M10 5.5 8 3H3v5l3 2.5" />
    </g>
    <defs>
      <clipPath id="swords-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSwordsIcon;
