import * as React from "react";
import type { SVGProps } from "react";
const SvgBallBaseballIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#ball-baseball-icon_svg__a)"
    >
      <path d="M5.636 18.364A9 9 0 1 0 18.364 5.635a9 9 0 0 0-12.728 12.73" />
      <path d="M12.495 3.02a9 9 0 0 1-9.475 9.475M20.98 11.505a9 9 0 0 0-9.475 9.475M9 9l2 2M13 13l2 2M11 7l2 1M7 11l1 2M16 11l1 2M11 16l2 1" />
    </g>
    <defs>
      <clipPath id="ball-baseball-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBallBaseballIcon;
