import * as React from "react";
import type { SVGProps } from "react";
const SvgMoodAngryIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#mood-angry-icon_svg__a)"
    >
      <path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18M8 9l2 1M16 9l-2 1" />
      <path d="M14.5 16.05a3.5 3.5 0 0 0-5 0" />
    </g>
    <defs>
      <clipPath id="mood-angry-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMoodAngryIcon;
