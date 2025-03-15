import * as React from "react";
import type { SVGProps } from "react";
const SvgWorldPlus = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#world-plus_svg__a)"
    >
      <path d="M20.985 12.518a9.001 9.001 0 1 0-8.45 8.466M3.602 9h16.8M3.602 15h11.4" />
      <path d="M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 2.283 12.157M16 19h6M19 16v6" />
    </g>
    <defs>
      <clipPath id="world-plus_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWorldPlus;
