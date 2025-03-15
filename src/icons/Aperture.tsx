import * as React from "react";
import type { SVGProps } from "react";
const SvgAperture = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#aperture_svg__a)"
    >
      <path d="M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12M3.602 15h10.55M6.55 4.938l3.26 10.034M17.031 4.637l-8.535 6.2M20.558 14.51l-8.535-6.201M12.258 20.917l3.26-10.034" />
    </g>
    <defs>
      <clipPath id="aperture_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAperture;
