import * as React from "react";
import type { SVGProps } from "react";
const SvgWorldCode = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#world-code_svg__a)"
    >
      <path d="M20.942 13.02a9 9 0 1 0-9.47 7.965M3.602 9h16.8M3.602 15h9.9" />
      <path d="M11.5 3a17 17 0 0 0 0 18M12.5 3c2 3.206 2.837 6.913 2.508 10.537M20 21l2-2-2-2M17 17l-2 2 2 2" />
    </g>
    <defs>
      <clipPath id="world-code_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWorldCode;
