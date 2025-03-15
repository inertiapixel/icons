import * as React from "react";
import type { SVGProps } from "react";
const SvgHexagonPlus2 = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#hexagon-plus-2_svg__a)"
    >
      <path d="M13.092 21.72a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.81.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033c.7.398 1.13 1.143 1.125 1.948V12.5M16 19h6M19 16v6" />
    </g>
    <defs>
      <clipPath id="hexagon-plus-2_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHexagonPlus2;
