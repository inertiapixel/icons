import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsVerticalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrows-vertical-icon_svg__a)"
    >
      <path d="m8 7 4-4 4 4M8 17l4 4 4-4M12 3v18" />
    </g>
    <defs>
      <clipPath id="arrows-vertical-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowsVerticalIcon;
