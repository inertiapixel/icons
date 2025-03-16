import * as React from "react";
import type { SVGProps } from "react";
const SvgCirclesRelationIcon = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#circles-relation-icon_svg__a)"
    >
      <path d="M9.181 6.117a6 6 0 1 0 4.511 3.987" />
      <path d="M14.814 17.882a6 6 0 1 0-4.496-3.954" />
    </g>
    <defs>
      <clipPath id="circles-relation-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCirclesRelationIcon;
