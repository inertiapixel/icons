import * as React from "react";
import type { SVGProps } from "react";
const SvgEyeClosedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#eye-closed-icon_svg__a)"
    >
      <path d="M21 9q-3.6 4-9 4T3 9M3 15l2.5-3.8M21 14.975 18.508 11.2M9 17l.5-4M15 17l-.5-4" />
    </g>
    <defs>
      <clipPath id="eye-closed-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEyeClosedIcon;
