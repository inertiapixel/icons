import * as React from "react";
import type { SVGProps } from "react";
const SvgGitBranchIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#git-branch-icon_svg__a)"
    >
      <path d="M5 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0M5 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0M15 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0M7 8v8M9 18h6a2 2 0 0 0 2-2v-5" />
      <path d="m14 14 3-3 3 3" />
    </g>
    <defs>
      <clipPath id="git-branch-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGitBranchIcon;
