import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDownRhombus = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-down-rhombus_svg__a)"
    >
      <path d="M12 8v13M15 18l-3 3-3-3M14.5 5.5 12 3 9.5 5.5 12 8z" />
    </g>
    <defs>
      <clipPath id="arrow-down-rhombus_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowDownRhombus;
