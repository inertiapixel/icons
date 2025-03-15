import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowAutofitUp = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#arrow-autofit-up_svg__a)"
    >
      <path d="M12 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8M18 20V3M15 6l3-3 3 3" />
    </g>
    <defs>
      <clipPath id="arrow-autofit-up_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowAutofitUp;
