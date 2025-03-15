import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartsOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#hearts-off_svg__a)"
    >
      <path d="m14.019 17.998-2.017 2-7.5-7.428a5 5 0 0 1 .49-7.586m3.01-1a5 5 0 0 1 4 2.018 5 5 0 0 1 8.152 5.784" />
      <path d="M11.814 11.814a2.81 2.81 0 0 0-.007 3.948L15.989 20l2.01-2.021m1.977-1.99.21-.212a2.81 2.81 0 0 0 0-3.948 2.746 2.746 0 0 0-3.91-.007l-.282.178M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="hearts-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHeartsOff;
