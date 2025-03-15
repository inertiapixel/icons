import * as React from "react";
import type { SVGProps } from "react";
const SvgTopologyBus = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#topology-bus_svg__a)"
    >
      <path d="M14 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0M6 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0M22 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0M2 16h20M4 12v4M12 12v4M20 12v4" />
    </g>
    <defs>
      <clipPath id="topology-bus_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTopologyBus;
