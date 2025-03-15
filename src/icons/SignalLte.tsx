import * as React from "react";
import type { SVGProps } from "react";
const SvgSignalLte = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#signal-lte_svg__a)"
    >
      <path d="M21 8h-4v8h4M17 12h2.5M4 8v8h4M10 8h4M12 8v8" />
    </g>
    <defs>
      <clipPath id="signal-lte_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSignalLte;
