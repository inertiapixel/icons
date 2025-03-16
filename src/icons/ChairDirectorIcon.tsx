import * as React from "react";
import type { SVGProps } from "react";
const SvgChairDirectorIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#chair-director-icon_svg__a)"
    >
      <path d="m6 21 12-9M6 12l12 9M5 12h14M6 3v9M18 3v9M6 8h12M6 5h12" />
    </g>
    <defs>
      <clipPath id="chair-director-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChairDirectorIcon;
