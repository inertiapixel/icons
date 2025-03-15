import * as React from "react";
import type { SVGProps } from "react";
const SvgStereoGlasses = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#stereo-glasses_svg__a)"
    >
      <path d="M8 3H6l-3 9M16 3h2l3 9M3 12v7a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707-.293l2-2a1 1 0 0 1 1.414 0l2 2a1 1 0 0 0 .707.293H20a1 1 0 0 0 1-1v-7zM7 16h1M16 16h1" />
    </g>
    <defs>
      <clipPath id="stereo-glasses_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgStereoGlasses;
