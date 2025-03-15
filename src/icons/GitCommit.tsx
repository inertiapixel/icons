import * as React from "react";
import type { SVGProps } from "react";
const SvgGitCommit = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#git-commit_svg__a)"
    >
      <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0M12 3v6M12 15v6" />
    </g>
    <defs>
      <clipPath id="git-commit_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGitCommit;
