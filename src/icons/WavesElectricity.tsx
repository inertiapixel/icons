import * as React from "react";
import type { SVGProps } from "react";
const SvgWavesElectricity = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#waves-electricity_svg__a)"
    >
      <path d="M3 12c.576-.642 1.512-1.016 2.5-1 .988-.016 1.924.358 2.5 1 .576.644 1.512 1.018 2.5 1 .988.018 1.924-.356 2.5-1M3 16c.576-.642 1.512-1.016 2.5-1 .988-.016 1.924.358 2.5 1 .576.644 1.512 1.018 2.5 1 .988.018 1.924-.356 2.5-1M3 8c.576-.642 1.512-1.016 2.5-1 .988-.016 1.924.358 2.5 1 .576.644 1.512 1.018 2.5 1 .988.018 1.924-.356 2.5-1M20 7l-3 5h4l-3 5" />
    </g>
    <defs>
      <clipPath id="waves-electricity_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWavesElectricity;
