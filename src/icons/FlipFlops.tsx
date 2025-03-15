import * as React from "react";
import type { SVGProps } from "react";
const SvgFlipFlops = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#flip-flops_svg__a)"
    >
      <path d="M18 4c2.21 0 4 1.682 4 3.758q.002.117-.008.234l-.6 9.014c-.11 1.683-1.596 3-3.392 3s-3.28-1.311-3.392-3l-.6-9.014c-.138-2.071 1.538-3.855 3.743-3.985Q17.876 4 18 4" />
      <path d="M14.5 14Q16 9 18 9t3.5 5M18 16v1M6 4c2.21 0 4 1.682 4 3.758q.002.117-.008.234l-.6 9.014c-.11 1.683-1.596 3-3.392 3s-3.28-1.311-3.392-3l-.6-9.014C1.87 5.921 3.546 4.137 5.75 4.007 5.834 4.007 5.917 4 6 4" />
      <path d="M2.5 14Q4 9 6 9t3.5 5M6 16v1" />
    </g>
    <defs>
      <clipPath id="flip-flops_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFlipFlops;
