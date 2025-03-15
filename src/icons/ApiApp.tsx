import * as React from "react";
import type { SVGProps } from "react";
const SvgApiApp = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#api-app_svg__a)"
    >
      <path d="M12 15H5.5a2.5 2.5 0 0 1 0-5H6M15 12v6.5a2.5 2.5 0 0 1-5 0V18M12 9h6.5a2.5 2.5 0 0 1 0 5H18M9 12V5.5a2.5 2.5 0 1 1 5 0V6" />
    </g>
    <defs>
      <clipPath id="api-app_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgApiApp;
