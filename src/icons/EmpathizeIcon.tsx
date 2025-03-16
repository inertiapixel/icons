import * as React from "react";
import type { SVGProps } from "react";
const SvgEmpathizeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#empathize-icon_svg__a)"
    >
      <path d="M9.5 5.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0M12.002 21.37l5.095-5.096a3.087 3.087 0 1 0-4.367-4.367l-.728.727-.728-.727a3.089 3.089 0 1 0-4.367 4.367z" />
    </g>
    <defs>
      <clipPath id="empathize-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEmpathizeIcon;
