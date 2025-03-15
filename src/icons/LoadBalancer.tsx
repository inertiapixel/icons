import * as React from "react";
import type { SVGProps } from "react";
const SvgLoadBalancer = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#load-balancer_svg__a)"
    >
      <path d="M9 13a3 3 0 1 0 6 0 3 3 0 0 0-6 0M11 20a1 1 0 1 0 2 0 1 1 0 0 0-2 0M12 16v3M12 10V3M9 6l3-3 3 3M12 10V3" />
      <path d="m9 6 3-3 3 3M14.895 12.228l6.11-2.224M17.16 8.21l3.845 1.794-1.793 3.845M9.102 12.215l-6.075-2.211M6.872 8.21l-3.845 1.794 1.793 3.845" />
    </g>
    <defs>
      <clipPath id="load-balancer_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLoadBalancer;
