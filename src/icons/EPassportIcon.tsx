import * as React from "react";
import type { SVGProps } from "react";
const SvgEPassportIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#e-passport-icon_svg__a)"
    >
      <path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" />
      <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0M9 12H2M15 12h7" />
    </g>
    <defs>
      <clipPath id="e-passport-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEPassportIcon;
