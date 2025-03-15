import * as React from "react";
import type { SVGProps } from "react";
const SvgSolarPanel = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#solar-panel_svg__a)"
    >
      <path d="M4.281 14h15.44a1 1 0 0 0 .97-1.243l-1.5-6a1 1 0 0 0-.97-.757H5.781a1 1 0 0 0-.97.757l-1.5 6A1 1 0 0 0 4.281 14M4 10h16M10 6l-1 8M14 6l1 8M12 14v4M7 18h10" />
    </g>
    <defs>
      <clipPath id="solar-panel_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSolarPanel;
