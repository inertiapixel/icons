import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyCentIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#currency-cent-icon_svg__a)"
    >
      <path d="M16.008 7.54A5.97 5.97 0 0 0 12 6a6 6 0 0 0-5.992 6c0 3.314 2.682 6 5.992 6a5.97 5.97 0 0 0 4-1.536M12 20v-2M12 6V4" />
    </g>
    <defs>
      <clipPath id="currency-cent-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCurrencyCentIcon;
