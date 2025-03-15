import * as React from "react";
import type { SVGProps } from "react";
const SvgLollipopOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#lollipop-off_svg__a)"
    >
      <path d="M7.462 7.492a7 7 0 0 0 9.06 9.04m2.416-1.57a7 7 0 1 0-9.884-9.916" />
      <path d="M21 10a3.5 3.5 0 1 0-7 0M12.71 12.715A3.5 3.5 0 0 1 7 10M14 17c.838 0 1.607-.294 2.209-.785M17.5 13.5A3.5 3.5 0 0 0 14 10M14 3a3.5 3.5 0 0 0-3.5 3.5M3 21l6-6M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="lollipop-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLollipopOff;
