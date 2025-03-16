import * as React from "react";
import type { SVGProps } from "react";
const SvgDogIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#dog-icon_svg__a)"
    >
      <path d="M11 5h2M19 12q-1 8-5 8h-4q-4 0-5-8" />
      <path d="M11 16q0 1 1 1t1-1zM12 18v2M10 11v.01M14 11v.01M5 4l6 .97-6.238 6.688a1.02 1.02 0 0 1-1.41.111.95.95 0 0 1-.327-.954zM19 4l-6 .97 6.238 6.688c.358.408.989.458 1.41.111a.95.95 0 0 0 .327-.954z" />
    </g>
    <defs>
      <clipPath id="dog-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDogIcon;
