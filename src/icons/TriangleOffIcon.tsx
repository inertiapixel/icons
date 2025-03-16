import * as React from "react";
import type { SVGProps } from "react";
const SvgTriangleOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#triangle-off-icon_svg__a)"
    >
      <path d="m7.825 7.83-5.568 9.295a1.914 1.914 0 0 0 1.636 2.871H20m1.997-1.99c-.012-.31-.1-.611-.255-.88L13.637 3.59a1.913 1.913 0 0 0-3.273 0L9.335 5.308M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="triangle-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTriangleOffIcon;
