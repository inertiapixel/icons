import * as React from "react";
import type { SVGProps } from "react";
const SvgAlertSmallOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#alert-small-off-icon_svg__a)"
    >
      <path d="M12 16h.01M12 7v1M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="alert-small-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAlertSmallOffIcon;
