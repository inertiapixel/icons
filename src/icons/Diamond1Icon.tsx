import * as React from "react";
import type { SVGProps } from "react";
const SvgDiamond1Icon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#diamond-1-icon_svg__a)"
    >
      <path d="M6 5h12l3 5-8.5 9.5a.7.7 0 0 1-1 0L3 10z" />
      <path d="M10 12 8 9.8l.6-1" />
    </g>
    <defs>
      <clipPath id="diamond-1-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDiamond1Icon;
