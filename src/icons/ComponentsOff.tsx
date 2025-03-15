import * as React from "react";
import type { SVGProps } from "react";
const SvgComponentsOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#components-off_svg__a)"
    >
      <path d="m3 12 3 3 3-3-3-3zM18.5 14.5 21 12l-3-3-2.5 2.5M12.499 8.501 15 6l-3-3-2.5 2.5M9 18l3 3 3-3-3-3zM3 3l18 18" />
    </g>
    <defs>
      <clipPath id="components-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponentsOff;
