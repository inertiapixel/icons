import * as React from "react";
import type { SVGProps } from "react";
const SvgCarFanIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#car-fan-icon_svg__a)"
    >
      <path d="M12 12V3l4.912 1.914a1.7 1.7 0 0 1 .428 2.925zM12 12h9l-1.914 4.912a1.7 1.7 0 0 1-2.925.428zM12 11.999H3l1.914-4.912a1.7 1.7 0 0 1 2.925-.428zM11.999 12v9l-4.912-1.914a1.7 1.7 0 0 1-.428-2.925z" />
    </g>
    <defs>
      <clipPath id="car-fan-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCarFanIcon;
