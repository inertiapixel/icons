import * as React from "react";
import type { SVGProps } from "react";
const SvgCarrotOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#carrot-off-icon_svg__a)"
    >
      <path d="M8.868 8.846C6.112 12.228 3 21 3 21s8.75-3.104 12.134-5.85m1.667-2.342a4.485 4.485 0 0 0-5.589-5.615M9 13l-1.5-1.5" />
      <path d="M22 8s-1.14-2-3-2c-1.406 0-3 2-3 2s1.14 2 3 2 3-2 3-2" />
      <path d="M16 2s-2 1.14-2 3 2 3 2 3 2-1.577 2-3c0-1.86-2-3-2-3M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="carrot-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCarrotOffIcon;
