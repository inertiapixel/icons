import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandRedditIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-reddit-icon_svg__a)"
    >
      <path d="M12 8c2.648 0 5.028.826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59-4.03 6.5-9 6.5-4.875 0-8.845-2.8-9-6.294l-1-.206a2.5 2.5 0 0 1 2.326-4.36C5.973 8.827 8.353 8 11.001 8zM12 8l1-5 6 1" />
      <path d="M18 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
      <path
        fill="currentColor"
        d="M9 13.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M15 13.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
      />
      <path d="M10 17q1 .5 2 .5t2-.5" />
    </g>
    <defs>
      <clipPath id="brand-reddit-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandRedditIcon;
