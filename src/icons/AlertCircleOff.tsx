import * as React from "react";
import type { SVGProps } from "react";
const SvgAlertCircleOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#alert-circle-off_svg__a)"
    >
      <path d="M5.643 5.628A9 9 0 0 0 18.358 18.37m1.693-2.349A9 9 0 0 0 7.964 3.952M12 7v1M12 16h.01M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="alert-circle-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAlertCircleOff;
