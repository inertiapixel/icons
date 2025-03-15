import * as React from "react";
import type { SVGProps } from "react";
const SvgMeteorOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#meteor-off_svg__a)"
    >
      <path d="M9.75 5.761 13 3l-1 5 9-5-5 9h5l-2.467 2.536m-1.983 2.04-2.441 2.51A6.5 6.5 0 1 1 5.254 9.58l2.322-1.972" />
      <path d="M7 14.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="meteor-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMeteorOff;
