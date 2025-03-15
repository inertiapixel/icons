import * as React from "react";
import type { SVGProps } from "react";
const SvgScaleOutlineOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#scale-outline-off_svg__a)"
    >
      <path d="M7 3h10a4 4 0 0 1 4 4v10m-1.173 2.83A3.99 3.99 0 0 1 17 21H7a4 4 0 0 1-4-4V7c0-1.104.447-2.103 1.17-2.827" />
      <path d="M11.064 7.062Q11.528 7 12.002 7c1.956 0 3.724.802 5 2.095q-1.01.943-2 1.905m-3.723.288a3 3 0 0 0-1.315.71L7.008 9.095q.52-.532 1.142-.942M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="scale-outline-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgScaleOutlineOff;
