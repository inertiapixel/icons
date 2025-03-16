import * as React from "react";
import type { SVGProps } from "react";
const SvgFileInfinityIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#file-infinity-icon_svg__a)"
    >
      <path d="M15.536 17.586a2.123 2.123 0 0 0-2.93 0 1.95 1.95 0 0 0 0 2.828c.81.781 2.12.781 2.93 0m0 0c-.805.778.809-.781 0 0m0 0 1.46-1.41 1.46-1.419" />
      <path d="M15.54 17.58 17 19l1.46 1.41m0 0c-.806-.779.808.78 0 0m0 0c.804.78 2.12.781 2.928 0a1.95 1.95 0 0 0 0-2.828 2.123 2.123 0 0 0-2.929 0M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M9.5 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v6" />
    </g>
    <defs>
      <clipPath id="file-infinity-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFileInfinityIcon;
