import * as React from "react";
import type { SVGProps } from "react";
const SvgNavigationOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#navigation-off_svg__a)"
    >
      <path d="M16.28 12.28Q14.856 9.184 12 3q-1.05 2.273-1.572 3.41m-1.27 2.75Q7.834 12.03 4.03 20.275c-.07.2-.017.424.135.572.15.148.374.193.57.116l7.266-2.463 7.265 2.463c.196.077.42.032.57-.116a.55.55 0 0 0 .134-.572l-.26-.563M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="navigation-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNavigationOff;
