import * as React from "react";
import type { SVGProps } from "react";
const SvgHttpConnect = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#http-connect_svg__a)"
    >
      <path d="M7 10a2 2 0 1 0-4 0v4a2 2 0 0 0 4 0M17 16V8l4 8V8M12 8a2 2 0 0 1 2 2v4a2 2 0 0 1-4 0v-4a2 2 0 0 1 2-2" />
    </g>
    <defs>
      <clipPath id="http-connect_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHttpConnect;
