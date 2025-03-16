import * as React from "react";
import type { SVGProps } from "react";
const SvgFoldersOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#folders-off-icon_svg__a)"
    >
      <path d="M17 17H9a2 2 0 0 1-2-2V7m1.177-2.823C8.428 4.063 8.707 4 9 4h3l2 2h5a2 2 0 0 1 2 2v7c0 .55-.223 1.05-.583 1.411" />
      <path d="M17 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="folders-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFoldersOffIcon;
