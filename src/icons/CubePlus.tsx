import * as React from "react";
import type { SVGProps } from "react";
const SvgCubePlus = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#cube-plus_svg__a)"
    >
      <path d="M21 12.5V7.99a1.98 1.98 0 0 0-1-1.716l-7-4.009a2.02 2.02 0 0 0-2 0L4 6.272c-.619.356-1 1.01-1 1.718v8.018c0 .71.381 1.364 1 1.718l7 4.008a2.02 2.02 0 0 0 2 0M12 22V12M12 12l8.73-5.04M3.27 6.96 12 12M16 19h6M19 16v6" />
    </g>
    <defs>
      <clipPath id="cube-plus_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCubePlus;
