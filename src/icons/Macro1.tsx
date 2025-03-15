import * as React from "react";
import type { SVGProps } from "react";
const SvgMacro1 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#macro-1_svg__a)"
    >
      <path d="M6 15a6 6 0 1 0 12 0" />
      <path d="M18 15a6 6 0 0 0-6 6M12 21a6 6 0 0 0-6-6M12 21V11M12 11a5 5 0 0 1-5-5V3l3 2 2-2 2 2 3-2v3a5 5 0 0 1-5 5" />
    </g>
    <defs>
      <clipPath id="macro-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMacro1;
