import * as React from "react";
import type { SVGProps } from "react";
const SvgPencilOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#pencil-off-icon_svg__a)"
    >
      <path d="m10 9.998-6 6v4h4l6-6m1.99-1.99 2.504-2.504a2.829 2.829 0 0 0-4-4l-2.5 2.5M13.5 6.5l4 4M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="pencil-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPencilOffIcon;
