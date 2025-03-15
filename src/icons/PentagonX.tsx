import * as React from "react";
import type { SVGProps } from "react";
const SvgPentagonX = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#pentagon-x_svg__a)"
    >
      <path d="m13.163 2.167 8.02 5.828c.695.504.985 1.397.72 2.212l-3.064 9.43a1.98 1.98 0 0 1-1.881 1.367H7.042a1.98 1.98 0 0 1-1.881-1.367l-3.064-9.43a1.98 1.98 0 0 1 .719-2.212l8.02-5.828a1.98 1.98 0 0 1 2.327 0M14 14l-4-4M10 14l4-4" />
    </g>
    <defs>
      <clipPath id="pentagon-x_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPentagonX;
