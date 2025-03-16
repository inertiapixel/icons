import * as React from "react";
import type { SVGProps } from "react";
const SvgHelpOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#help-off-icon_svg__a)"
    >
      <path d="M5.64 5.632A9 9 0 0 0 18.36 18.37m1.68-2.318A9 9 0 0 0 7.966 3.954M12 17v.01" />
      <path d="M12 13.501a1.5 1.5 0 0 1 .393-1.1m2.106-1.9a2.6 2.6 0 0 0-3.347-3.36M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="help-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHelpOffIcon;
