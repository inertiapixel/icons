import * as React from "react";
import type { SVGProps } from "react";
const SvgPlant2 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#plant-2_svg__a)"
    >
      <path d="M2 9a10 10 0 0 0 20 0" />
      <path d="M12 19A10 10 0 0 1 22 9M2 9a10 10 0 0 1 10 10" />
      <path d="M12 4a9.7 9.7 0 0 1 2.99 7.5M9.008 11.5a9.7 9.7 0 0 1 2.99-7.5" />
    </g>
    <defs>
      <clipPath id="plant-2_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlant2;
