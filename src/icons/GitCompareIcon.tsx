import * as React from "react";
import type { SVGProps } from "react";
const SvgGitCompareIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#git-compare-icon_svg__a)"
    >
      <path d="M4 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0M16 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M11 6h5a2 2 0 0 1 2 2v8" />
      <path d="m14 9-3-3 3-3M13 18H8a2 2 0 0 1-2-2V8" />
      <path d="m10 15 3 3-3 3" />
    </g>
    <defs>
      <clipPath id="git-compare-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGitCompareIcon;
