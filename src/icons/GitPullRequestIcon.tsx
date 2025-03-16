import * as React from "react";
import type { SVGProps } from "react";
const SvgGitPullRequestIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#git-pull-request-icon_svg__a)"
    >
      <path d="M4 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0M4 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0M16 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0M6 8v8" />
      <path d="M11 6h5a2 2 0 0 1 2 2v8" />
      <path d="m14 9-3-3 3-3" />
    </g>
    <defs>
      <clipPath id="git-pull-request-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGitPullRequestIcon;
