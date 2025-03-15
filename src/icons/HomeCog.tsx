import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeCog = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#home-cog_svg__a)"
    >
      <path d="M9 21v-6a2 2 0 0 1 2-2h1.6" />
      <path d="m20 11-8-8-9 9h2v7a2 2 0 0 0 2 2h4.159M16 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0M18 14.5V16M18 20v1.5M21.033 16.25l-1.299.75M16.269 19l-1.3.75M14.969 16.25l1.3.75M19.734 19l1.3.75" />
    </g>
    <defs>
      <clipPath id="home-cog_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHomeCog;
