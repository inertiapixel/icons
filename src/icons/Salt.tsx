import * as React from "react";
import type { SVGProps } from "react";
const SvgSalt = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#salt_svg__a)"
    >
      <path d="M12 13v.01M10 16v.01M14 16v.01M7.5 8h9l-.281-2.248A2 2 0 0 0 14.234 4H9.766A2 2 0 0 0 7.78 5.752z" />
      <path d="m7.499 8-1.612 9.671A2 2 0 0 0 7.86 20h8.278a2 2 0 0 0 1.973-2.329L16.499 8" />
    </g>
    <defs>
      <clipPath id="salt_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSalt;
