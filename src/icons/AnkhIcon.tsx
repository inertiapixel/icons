import * as React from "react";
import type { SVGProps } from "react";
const SvgAnkhIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#ankh-icon_svg__a)"
    >
      <path d="M6 13h12M12 21v-8m0 0-.422-.211A6.47 6.47 0 0 1 8 7a4 4 0 0 1 8 0 6.47 6.47 0 0 1-3.578 5.789z" />
    </g>
    <defs>
      <clipPath id="ankh-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAnkhIcon;
