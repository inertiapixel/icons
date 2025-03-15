import * as React from "react";
import type { SVGProps } from "react";
const SvgMoodWrrr = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#mood-wrrr_svg__a)"
    >
      <path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18" />
      <path d="m8 16 1-1 1.5 1 1.5-1 1.5 1 1.5-1 1 1M8.5 11.5 10 10 8.5 8.5M15.5 11.5 14 10l1.5-1.5" />
    </g>
    <defs>
      <clipPath id="mood-wrrr_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMoodWrrr;
