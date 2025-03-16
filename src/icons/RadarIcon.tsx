import * as React from "react";
import type { SVGProps } from "react";
const SvgRadarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#radar-icon_svg__a)">
      <path
        fill="currentColor"
        d="M12 9.998a2 2 0 0 1 1.678.911l.053.09h7.27l.116.006a1 1 0 0 1 .883.993c0 5.523-4.477 10-10 10a1 1 0 0 1-1-1V13.73l-.089-.053a2 2 0 0 1-.906-1.529L10 11.998a2 2 0 0 1 2-2m9.428-1.334a1 1 0 0 1-1.884.668A7.999 7.999 0 0 0 4.32 9.79a8 8 0 0 0 5.018 9.76 1 1 0 1 1-.666 1.886A10 10 0 1 1 21.428 8.664M16.8 8.398a1 1 0 1 1-1.6 1.2 4 4 0 1 0-5.6 5.6 1 1 0 1 1-1.2 1.6 6 6 0 1 1 8.4-8.4"
      />
    </g>
    <defs>
      <clipPath id="radar-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRadarIcon;
