import * as React from "react";
import type { SVGProps } from "react";
const SvgMoodSick = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#mood-sick_svg__a)"
    >
      <path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18M8.998 10h-.01M14.998 10h-.01" />
      <path d="m8 16 1-1 1.5 1 1.5-1 1.5 1 1.5-1 1 1" />
    </g>
    <defs>
      <clipPath id="mood-sick_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMoodSick;
