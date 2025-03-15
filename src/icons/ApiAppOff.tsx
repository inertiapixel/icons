import * as React from "react";
import type { SVGProps } from "react";
const SvgApiAppOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#api-app-off_svg__a)"
    >
      <path d="M12 15H5.5a2.5 2.5 0 0 1 0-5H6M15 15v3.5a2.5 2.5 0 0 1-5 0V18M13 9h5.5a2.5 2.5 0 0 1 0 5H18M9 12V9m.042-3.956A2.5 2.5 0 0 1 14 5.5V6M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="api-app-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgApiAppOff;
