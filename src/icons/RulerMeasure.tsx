import * as React from "react";
import type { SVGProps } from "react";
const SvgRulerMeasure = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#ruler-measure_svg__a)"
    >
      <path d="M19.875 12c.621 0 1.125.512 1.125 1.143v5.714c0 .631-.504 1.143-1.125 1.143H4a1 1 0 0 1-1-1v-5.857C3 12.512 3.504 12 4.125 12zM9 12v2M6 12v3M12 12v3M18 12v3M15 12v2M3 3v4M3 5h18M21 3v4" />
    </g>
    <defs>
      <clipPath id="ruler-measure_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRulerMeasure;
