import * as React from "react";
import type { SVGProps } from "react";
const SvgPerfumeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#perfume-icon_svg__a)"
    >
      <path d="M10 6v3M14 6v3M5 11a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" />
      <path d="M10 15a2 2 0 1 0 4 0 2 2 0 0 0-4 0M9 3h6v3H9z" />
    </g>
    <defs>
      <clipPath id="perfume-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPerfumeIcon;
