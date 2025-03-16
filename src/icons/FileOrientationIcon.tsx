import * as React from "react";
import type { SVGProps } from "react";
const SvgFileOrientationIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#file-orientation-icon_svg__a)"
    >
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M10 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v2M13 20h5a2 2 0 0 0 2-2v-5" />
      <path d="m15 22-2-2 2-2M18 15l2-2 2 2" />
    </g>
    <defs>
      <clipPath id="file-orientation-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFileOrientationIcon;
