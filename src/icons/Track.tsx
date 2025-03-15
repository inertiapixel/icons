import * as React from "react";
import type { SVGProps } from "react";
const SvgTrack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#track_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 15 15 4m5 5L9 20m-4-8 7 7M8.5 8.5l7 7M12 5l7 7"
      />
    </g>
    <defs>
      <clipPath id="track_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTrack;
