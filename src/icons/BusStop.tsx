import * as React from "react";
import type { SVGProps } from "react";
const SvgBusStop = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#bus-stop_svg__a)"
    >
      <path d="M3 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM16 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M10 5h7c2.761 0 5 3.134 5 7v5h-2M16 17H8" />
      <path d="m16 5 1.5 7H22M9.5 10H17M12 5v5M5 9v11" />
    </g>
    <defs>
      <clipPath id="bus-stop_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBusStop;
