import * as React from "react";
import type { SVGProps } from "react";
const SvgHtml = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#html_svg__a)"
    >
      <path d="M13 16V8l2 5 2-5v8M1 16V8M5 8v8M1 12h4M7 8h4M9 8v8M20 8v8h3" />
    </g>
    <defs>
      <clipPath id="html_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHtml;
