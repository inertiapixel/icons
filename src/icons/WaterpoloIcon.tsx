import * as React from "react";
import type { SVGProps } from "react";
const SvgWaterpoloIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#waterpolo-icon_svg__a)"
    >
      <path d="M12 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
      <path d="m5 8 3 4 4.5 1 7.5-1M3 18.75A2.4 2.4 0 0 0 4 19a2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 1-.25M12 16l.5-3" />
      <path fill="currentColor" d="M6.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
    </g>
    <defs>
      <clipPath id="waterpolo-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWaterpoloIcon;
