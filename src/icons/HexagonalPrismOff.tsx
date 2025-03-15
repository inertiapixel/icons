import * as React from "react";
import type { SVGProps } from "react";
const SvgHexagonalPrismOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#hexagonal-prism-off_svg__a)"
    >
      <path d="M20.793 6.996 17.018 9.64c-.337.235-.737.36-1.147.361H14m-4 0H8.13c-.41 0-.81-.126-1.146-.362L3.21 6.998M8 10v11M16 10v2m0 4v5" />
      <path d="M20.972 16.968q.028-.167.028-.337V7.369c0-.655-.318-1.268-.853-1.643L16.78 3.363A2 2 0 0 0 15.633 3H8.367a2 2 0 0 0-1.066.309M4.956 4.952l-1.103.774A2 2 0 0 0 3 7.37v9.261c0 .655.318 1.269.853 1.644l3.367 2.363A2 2 0 0 0 8.367 21h7.265c.41 0 .811-.126 1.147-.363l2.26-1.587M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="hexagonal-prism-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHexagonalPrismOff;
