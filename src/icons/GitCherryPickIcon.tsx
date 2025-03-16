import * as React from "react";
import type { SVGProps } from "react";
const SvgGitCherryPickIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#git-cherry-pick-icon_svg__a)"
    >
      <path d="M4 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0M7 3v6M7 15v6M13 7h2.5l1.5 5-1.5 5H13M17 12h3" />
    </g>
    <defs>
      <clipPath id="git-cherry-pick-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGitCherryPickIcon;
