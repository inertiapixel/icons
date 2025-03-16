import * as React from "react";
import type { SVGProps } from "react";
const SvgMoodPuzzledIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#mood-puzzled-icon_svg__a)"
    >
      <path d="M14.987 3.51A9 9 0 1 0 16.5 19.794c2.49-1.437 4.182-3.978 4.5-6.794M10 10h.01M14 8h.01" />
      <path d="M12 15q1.5-2 3-2M20 9v.01M20 6a2.003 2.003 0 0 0 .914-3.782A1.98 1.98 0 0 0 18.5 2.7" />
    </g>
    <defs>
      <clipPath id="mood-puzzled-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMoodPuzzledIcon;
