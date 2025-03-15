import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandLinktree = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-linktree_svg__a)"
    >
      <path d="M4 10h16M6.5 4.5l11 11M6.5 15.5l11-11M12 10V2M12 15v7" />
    </g>
    <defs>
      <clipPath id="brand-linktree_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandLinktree;
