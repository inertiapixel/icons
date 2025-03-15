import * as React from "react";
import type { SVGProps } from "react";
const SvgBinaryTree = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#binary-tree_svg__a)"
    >
      <path d="M6 20a2 2 0 1 0-4 0 2 2 0 0 0 4 0M16 4a2 2 0 1 0-4 0 2 2 0 0 0 4 0M16 20a2 2 0 1 0-4 0 2 2 0 0 0 4 0M11 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0M21 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0M5.059 18.305l2.88-4.606M10.063 10.303 12.94 5.7M10.066 13.703l2.876 4.6M15.063 5.7l2.88 4.61" />
    </g>
    <defs>
      <clipPath id="binary-tree_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBinaryTree;
