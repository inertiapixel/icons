import * as React from "react";
import type { SVGProps } from "react";
const SvgHelpCircle1 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#help-circle-1_svg__a)"
    >
      <path d="M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12M12 16v.01" />
      <path d="M12 13a2 2 0 0 0 .914-3.782A1.98 1.98 0 0 0 10.5 9.7" />
    </g>
    <defs>
      <clipPath id="help-circle-1_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHelpCircle1;
