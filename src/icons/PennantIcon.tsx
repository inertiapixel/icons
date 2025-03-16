import * as React from "react";
import type { SVGProps } from "react";
const SvgPennantIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#pennant-icon_svg__a)">
      <path
        fill="currentColor"
        d="M9.999 2a1 1 0 0 1 .993.883l.007.117v.35l8.406 3.736c.752.335.79 1.365.113 1.77l-.113.058-8.406 3.735V20h1a1 1 0 0 1 .117 1.993l-.117.007h-4a1 1 0 0 1-.117-1.993L7.999 20h1V3a1 1 0 0 1 1-1"
      />
    </g>
    <defs>
      <clipPath id="pennant-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPennantIcon;
