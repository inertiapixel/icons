import * as React from "react";
import type { SVGProps } from "react";
const SvgSolarElectricityIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#solar-electricity-icon_svg__a)"
    >
      <path d="M4 6.281v11.44a1 1 0 0 0 1.243.97l6-1.5a1 1 0 0 0 .757-.97v-8.44a1 1 0 0 0-.757-.97l-6-1.5A1 1 0 0 0 4 6.281M8 6v12M12 12H4M20 7l-3 5h4l-3 5" />
    </g>
    <defs>
      <clipPath id="solar-electricity-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSolarElectricityIcon;
