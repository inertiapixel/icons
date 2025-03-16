import * as React from "react";
import type { SVGProps } from "react";
const SvgRainbowOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#rainbow-off-icon_svg__a)"
    >
      <path d="M22 17c0-5.523-4.477-10-10-10q-.462 0-.914.041m-3.208.845A10 10 0 0 0 2 17M11.088 11.07A6 6 0 0 0 6 17.001M14 17a2 2 0 0 0-4 0M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="rainbow-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRainbowOffIcon;
