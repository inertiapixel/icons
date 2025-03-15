import * as React from "react";
import type { SVGProps } from "react";
const SvgPrescription = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#prescription_svg__a)"
    >
      <path d="M6 19V3h4.5a4.5 4.5 0 1 1 0 9H6M19 21l-9-9M13 21l6-6" />
    </g>
    <defs>
      <clipPath id="prescription_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPrescription;
