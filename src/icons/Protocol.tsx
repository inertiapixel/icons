import * as React from "react";
import type { SVGProps } from "react";
const SvgProtocol = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#protocol_svg__a)"
    >
      <path d="M15 6 8 18M20 6l-7 12M5 14v.015M5 10.016v.015" />
    </g>
    <defs>
      <clipPath id="protocol_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgProtocol;
