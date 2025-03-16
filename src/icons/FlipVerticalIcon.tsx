import * as React from "react";
import type { SVGProps } from "react";
const SvgFlipVerticalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#flip-vertical-icon_svg__a)"
    >
      <path d="M12 3v18M16 7v10h5zM8 7v10H3z" />
    </g>
    <defs>
      <clipPath id="flip-vertical-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFlipVerticalIcon;
