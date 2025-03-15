import * as React from "react";
import type { SVGProps } from "react";
const SvgWorldDollar = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#world-dollar_svg__a)"
    >
      <path d="M20.876 10.51a9 9 0 1 0-7.84 10.43M3.602 9h16.8M3.602 15h9.9" />
      <path d="M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 2.578 9.02M21 15h-2.5a1.5 1.5 0 1 0 0 3h1a1.5 1.5 0 1 1 0 3H17M19 21v1m0-8v1" />
    </g>
    <defs>
      <clipPath id="world-dollar_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWorldDollar;
