import * as React from "react";
import type { SVGProps } from "react";
const SvgSnowmanIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#snowman-icon_svg__a)"
    >
      <path d="M11.999 3a4 4 0 0 1 2.906 6.75 6 6 0 1 1-5.81 0A4 4 0 0 1 11.999 3M17.5 11.5 20 10M6.5 11.5 4 10M12 13h.01M12 16h.01" />
    </g>
    <defs>
      <clipPath id="snowman-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSnowmanIcon;
