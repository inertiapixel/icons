import * as React from "react";
import type { SVGProps } from "react";
const SvgEyeBolt = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#eye-bolt_svg__a)"
    >
      <path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      <path d="M13.1 17.936A9 9 0 0 1 12 18q-5.4 0-9-6 3.6-6 9-6t9 6M19 16l-2 3h4l-2 3" />
    </g>
    <defs>
      <clipPath id="eye-bolt_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEyeBolt;
