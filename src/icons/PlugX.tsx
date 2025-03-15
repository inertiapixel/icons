import * as React from "react";
import type { SVGProps } from "react";
const SvgPlugX = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#plug-x_svg__a)"
    >
      <path d="M13.55 17.733a5.808 5.808 0 0 1-5.819-9.679L9.785 6l7.165 7.165M4 20l3.5-3.5M15 4l-3.5 3.5M20 9l-3.5 3.5M16 16l4 4M20 16l-4 4" />
    </g>
    <defs>
      <clipPath id="plug-x_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlugX;
