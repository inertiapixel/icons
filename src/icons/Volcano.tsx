import * as React from "react";
import type { SVGProps } from "react";
const SvgVolcano = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#volcano_svg__a)"
    >
      <path d="M9 8V7a2 2 0 1 0-4 0M15 8V7a2 2 0 1 1 4 0M4 20l3.472-7.812A2 2 0 0 1 9.3 11h5.4a2 2 0 0 1 1.828 1.188L20 20" />
      <path d="M6.191 15.064q.234-.058.475-.064c.527-.009 1.026.178 1.333.5.307.32.806.507 1.333.5.527.007 1.026-.18 1.334-.5.307-.322.806-.509 1.333-.5.527-.009 1.026.178 1.333.5.308.32.807.507 1.334.5.527.007 1.026-.18 1.333-.5.307-.322.806-.509 1.333-.5q.243.005.472.064M12 8V4" />
    </g>
    <defs>
      <clipPath id="volcano_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgVolcano;
