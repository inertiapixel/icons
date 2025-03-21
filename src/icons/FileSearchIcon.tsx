import * as React from "react";
import type { SVGProps } from "react";
const SvgFileSearchIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#file-search-icon_svg__a)"
    >
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M12 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v4.5" />
      <path d="M14 17.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0M18.5 19.5 21 22" />
    </g>
    <defs>
      <clipPath id="file-search-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFileSearchIcon;
