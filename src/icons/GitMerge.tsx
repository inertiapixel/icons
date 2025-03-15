import * as React from "react";
import type { SVGProps } from "react";
const SvgGitMerge = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#git-merge_svg__a)"
    >
      <path d="M5 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0M5 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0M15 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0M7 8v8" />
      <path d="M7 8a4 4 0 0 0 4 4h4" />
    </g>
    <defs>
      <clipPath id="git-merge_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGitMerge;
