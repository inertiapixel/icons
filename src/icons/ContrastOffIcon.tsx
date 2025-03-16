import * as React from "react";
import type { SVGProps } from "react";
const SvgContrastOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#contrast-off-icon_svg__a)"
    >
      <path d="M12 12v5a4.98 4.98 0 0 0 3.522-1.45m1.392-2.623A5 5 0 0 0 12 7v1" />
      <path d="M5.64 5.632A9 9 0 0 0 18.36 18.37m1.68-2.318A9 9 0 0 0 7.966 3.954M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="contrast-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgContrastOffIcon;
