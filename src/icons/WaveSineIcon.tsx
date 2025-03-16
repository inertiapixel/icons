import * as React from "react";
import type { SVGProps } from "react";
const SvgWaveSineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#wave-sine-icon_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.999 12h-2c-.894 0-1.662-.857-1.761-2-.296-3.45-.75-6-2.75-6s-2.5 3.582-2.5 8-.5 8-2.5 8-2.451-2.547-2.748-6c-.1-1.147-.867-2-1.763-2h-2"
      />
    </g>
    <defs>
      <clipPath id="wave-sine-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWaveSineIcon;
