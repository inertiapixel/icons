import * as React from "react";
import type { SVGProps } from "react";
const SvgMugIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#mug-icon_svg__a)"
    >
      <path d="M4.083 5h10.834A1.08 1.08 0 0 1 16 6.077v8.615C16 17.072 14.06 19 11.667 19H7.333C4.94 19 3 17.071 3 14.692V6.077A1.08 1.08 0 0 1 4.083 5M16 8h2.5c1.38 0 2.5 1.045 2.5 2.333v2.334C21 13.955 19.88 15 18.5 15H16" />
    </g>
    <defs>
      <clipPath id="mug-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMugIcon;
