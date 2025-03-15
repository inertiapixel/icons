import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowMergeBoth = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-merge-both_svg__a)"
    >
      <path d="m16 8-4-4-4 4M12 20V4M18 18q-6-2-6-10M6 18q6-2 6-10" />
    </g>
    <defs>
      <clipPath id="arrow-merge-both_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowMergeBoth;
