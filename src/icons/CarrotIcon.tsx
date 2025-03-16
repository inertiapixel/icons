import * as React from "react";
import type { SVGProps } from "react";
const SvgCarrotIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#carrot-icon_svg__a)"
    >
      <path d="M3.001 20.998s9.834-3.489 12.684-6.34a4.487 4.487 0 0 0-4.887-7.316 4.5 4.5 0 0 0-1.455.972c-2.86 2.861-6.347 12.69-6.347 12.69zM9 13l-1.5-1.5M16 14l-2-2M22 8s-1.14-2-3-2c-1.406 0-3 2-3 2s1.14 2 3 2 3-2 3-2" />
      <path d="M16 2s-2 1.14-2 3 2 3 2 3 2-1.577 2-3c0-1.86-2-3-2-3" />
    </g>
    <defs>
      <clipPath id="carrot-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCarrotIcon;
