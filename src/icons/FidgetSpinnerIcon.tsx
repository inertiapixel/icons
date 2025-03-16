import * as React from "react";
import type { SVGProps } from "react";
const SvgFidgetSpinnerIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#fidget-spinner-icon_svg__a)"
    >
      <path d="M18 16v.01M6 16v.01M12 5v.01M12 12v.01M12 1a4 4 0 0 1 2.001 7.464l.001.072a4 4 0 0 1 1.987 3.758l.22.128a4 4 0 0 1 1.591-.417L18 12a4 4 0 1 1-3.994 3.77l-.28-.16c-.522.25-1.108.39-1.726.39-.619 0-1.205-.14-1.728-.391l-.279.16L10 16a4 4 0 1 1-2.212-3.579l.222-.129a4 4 0 0 1 1.988-3.756L10 8.465A4 4 0 0 1 8.005 5.2L8 5a4 4 0 0 1 4-4" />
    </g>
    <defs>
      <clipPath id="fidget-spinner-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFidgetSpinnerIcon;
