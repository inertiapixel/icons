import * as React from "react";
import type { SVGProps } from "react";
const SvgBlender = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#blender_svg__a)"
    >
      <path d="M9 10H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10.802a1 1 0 0 1 .984 1.179L16 15M8 4l2 11M11 15h4a3 3 0 0 1 3 3v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2a3 3 0 0 1 3-3" />
      <path d="M12 4V3h2v1M13 18v.01" />
    </g>
    <defs>
      <clipPath id="blender_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBlender;
