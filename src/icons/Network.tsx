import * as React from "react";
import type { SVGProps } from "react";
const SvgNetwork = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#network_svg__a)"
    >
      <path d="M6 9a6 6 0 1 0 12 0A6 6 0 0 0 6 9" />
      <path d="M12 3q2 .5 2 6t-2 6M12 3q-2 .5-2 6t2 6M6 9h12M3 20h7M14 20h7M10 20a2 2 0 1 0 4 0 2 2 0 0 0-4 0M12 15v3" />
    </g>
    <defs>
      <clipPath id="network_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNetwork;
