import * as React from "react";
import type { SVGProps } from "react";
const SvgTomlIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#toml-icon_svg__a)"
    >
      <path d="M1.5 8h3M3 8v8M8.5 8A1.5 1.5 0 0 1 10 9.5v5a1.5 1.5 0 0 1-3 0v-5A1.5 1.5 0 0 1 8.5 8M13 16V8l2 5 2-5v8M20 8v8h2.5" />
    </g>
    <defs>
      <clipPath id="toml-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTomlIcon;
