import * as React from "react";
import type { SVGProps } from "react";
const SvgRadar2Icon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#radar-2-icon_svg__a)"
    >
      <path d="M11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
      <path d="M15.51 15.56A5 5 0 1 0 12 17" />
      <path d="M18.83 17.86A9 9 0 1 0 12 21M12 12v9" />
    </g>
    <defs>
      <clipPath id="radar-2-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRadar2Icon;
