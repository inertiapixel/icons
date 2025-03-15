import * as React from "react";
import type { SVGProps } from "react";
const SvgArchiveOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#archive-off_svg__a)"
    >
      <path d="M8.001 4h11a2 2 0 0 1 0 4h-7m-4 0h-3a2 2 0 0 1-.826-3.822" />
      <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 1.824-1.18M19 15V8M10 12h2M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="archive-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArchiveOff;
