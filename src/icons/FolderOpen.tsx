import * as React from "react";
import type { SVGProps } from "react";
const SvgFolderOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#folder-open_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m5 19 2.757-7.351A1 1 0 0 1 8.693 11H21M5 19h14.026a2 2 0 0 0 1.964-1.625l.996-5.211A1 1 0 0 0 21 11M5 19a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4l3 3h7a2 2 0 0 1 2 2v2"
      />
    </g>
    <defs>
      <clipPath id="folder-open_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFolderOpen;
