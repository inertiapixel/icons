import * as React from "react";
import type { SVGProps } from "react";
const SvgChristmasBallIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#christmas-ball-icon_svg__a)"
    >
      <path d="M4 13a8 8 0 1 0 16 0 8 8 0 0 0-16 0" />
      <path d="m11 5 1-2 1 2M4.512 10.161q3.744-1.657 7.488.84 3.941 2.628 7.882.652M4.316 15.252q3.842-1.814 7.685.748 3.439 2.293 6.878 1.081" />
    </g>
    <defs>
      <clipPath id="christmas-ball-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChristmasBallIcon;
