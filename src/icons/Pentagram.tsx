import * as React from "react";
import type { SVGProps } from "react";
const SvgPentagram = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#pentagram_svg__a)"
    >
      <path d="M5.636 5.636a9 9 0 1 1 12.728 12.728A9 9 0 0 1 5.636 5.636" />
      <path d="m15.236 10.999 5.264 4H14l-2 6-2-6H3.5l5.276-4-2.056-6.28L12 8.499l5.28-3.78z" />
    </g>
    <defs>
      <clipPath id="pentagram_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPentagram;
