import * as React from "react";
import type { SVGProps } from "react";
const SvgInfinity = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#infinity_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 12a10 10 0 0 1-2.171 2.828 4 4 0 1 1 0-5.656A10 10 0 0 1 12 12m0 0a10 10 0 0 1 2.173-2.828 4 4 0 1 1 0 5.656A10 10 0 0 1 12 12"
      />
    </g>
    <defs>
      <clipPath id="infinity_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgInfinity;
