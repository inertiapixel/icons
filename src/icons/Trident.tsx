import * as React from "react";
import type { SVGProps } from "react";
const SvgTrident = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#trident_svg__a)"
    >
      <path d="m3 6 2-2v3a7 7 0 1 0 14 0V4l2 2M12 21V3m0 0-2 2m2-2 2 2" />
    </g>
    <defs>
      <clipPath id="trident_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTrident;
