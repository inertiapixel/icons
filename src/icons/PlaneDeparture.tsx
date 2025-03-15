import * as React from "react";
import type { SVGProps } from "react";
const SvgPlaneDeparture = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#plane-departure_svg__a)"
    >
      <path d="m14.64 10.258 4.83-1.294a2 2 0 1 1 1.035 3.863L6.016 16.71l-4.45-5.02 2.897-.776 2.45 1.414 2.897-.776-3.743-6.244 2.898-.777zM3 21h18" />
    </g>
    <defs>
      <clipPath id="plane-departure_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlaneDeparture;
