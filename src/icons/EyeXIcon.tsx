import * as React from "react";
import type { SVGProps } from "react";
const SvgEyeXIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#eye-x-icon_svg__a)"
    >
      <path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M13.048 17.942q-.523.059-1.048.058-5.4 0-9-6 3.6-6 9-6t9 6a18 18 0 0 1-1.362 1.975M22 22l-5-5M17 22l5-5" />
    </g>
    <defs>
      <clipPath id="eye-x-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEyeXIcon;
