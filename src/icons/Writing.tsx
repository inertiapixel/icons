import * as React from "react";
import type { SVGProps } from "react";
const SvgWriting = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#writing_svg__a)"
    >
      <path d="M20 17V5c0-1.121-.879-2-2-2s-2 .879-2 2v12l2 2zM16 7h4M18 19H5a2 2 0 1 1 0-4h4a2 2 0 1 0 0-4H6" />
    </g>
    <defs>
      <clipPath id="writing_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWriting;
