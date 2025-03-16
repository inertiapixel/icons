import * as React from "react";
import type { SVGProps } from "react";
const SvgGlassIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#glass-icon_svg__a)"
    >
      <path d="M8 21h8M12 16v5M17 5l1 6c0 3.012-2.686 5-6 5s-6-1.988-6-5l1-6" />
      <path d="M7 5c0 .53.527 1.04 1.464 1.414C9.402 6.79 10.674 7 12 7s2.598-.21 3.536-.586C16.473 6.04 17 5.53 17 5s-.527-1.04-1.464-1.414C14.598 3.21 13.326 3 12 3s-2.598.21-3.536.586C7.527 3.96 7 4.47 7 5" />
    </g>
    <defs>
      <clipPath id="glass-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGlassIcon;
