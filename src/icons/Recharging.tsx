import * as React from "react";
import type { SVGProps } from "react";
const SvgRecharging = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#recharging_svg__a)"
    >
      <path d="M7.038 4.5a9 9 0 0 0-2.495 2.47M3.184 10.21a9 9 0 0 0 0 3.509M4.5 16.96a9 9 0 0 0 2.47 2.496M10.21 20.813a9 9 0 0 0 3.5 0M16.96 19.501a9 9 0 0 0 2.496-2.47M20.813 13.79a9 9 0 0 0 0-3.509M19.501 7.038a9 9 0 0 0-2.47-2.495M13.79 3.187a9 9 0 0 0-3.509-.02M12 8l-2 4h4l-2 4" />
      <path d="M12 21a9 9 0 0 0 0-18" />
    </g>
    <defs>
      <clipPath id="recharging_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRecharging;
