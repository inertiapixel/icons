import * as React from "react";
import type { SVGProps } from "react";
const SvgPlanetOffIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#planet-off-icon_svg__a)"
    >
      <path d="M18.815 13.58c1.956 1.824 3.157 3.448 3.184 4.444m-3.428.593c-2.098-.634-4.944-2.03-7.919-3.976-5.47-3.579-9.304-7.664-8.56-9.123.32-.628 1.591-.6 3.294-.113" />
      <path d="M7.044 7.058a7 7 0 0 0 9.908 9.89m1.58-2.425a7 7 0 0 0-9.056-9.054M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="planet-off-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlanetOffIcon;
