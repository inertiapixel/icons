import * as React from "react";
import type { SVGProps } from "react";
const SvgOlympicsOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#olympics-off-icon_svg__a)"
    >
      <path d="M6 6a3 3 0 1 0 3 3M15 9a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
      <path d="M9 8.998a3 3 0 0 0 3 3m2.566-1.445a3 3 0 0 0-4.135-4.113M6 15a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
      <path d="M12.877 12.88a3 3 0 0 0 4.239 4.246m.586-3.43a3 3 0 0 0-1.43-1.415M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="olympics-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgOlympicsOffIcon;
