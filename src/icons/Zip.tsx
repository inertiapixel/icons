import * as React from "react";
import type { SVGProps } from "react";
const SvgZip = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#zip_svg__a)"
    >
      <path d="M16 16V8h2a2 2 0 0 1 0 4h-2M12 8v8M4 8h4l-4 8h4" />
    </g>
    <defs>
      <clipPath id="zip_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgZip;
