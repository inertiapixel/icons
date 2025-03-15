import * as React from "react";
import type { SVGProps } from "react";
const SvgFolderOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#folder-off_svg__a)"
    >
      <path d="M8 4h1l3 3h7a2 2 0 0 1 2 2v8m-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 1.189-1.829M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="folder-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFolderOff;
