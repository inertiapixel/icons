import * as React from "react";
import type { SVGProps } from "react";
const SvgBackspaceIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#backspace-icon_svg__a)">
      <path
        fill="currentColor"
        d="M19.998 5a2 2 0 0 1 1.995 1.85l.005.15v10a2 2 0 0 1-1.85 1.995l-.15.005h-11a1 1 0 0 1-.608-.206l-.1-.087-5.037-5.04c-.809-.904-.847-2.25-.083-3.23l.12-.144 5-5a1 1 0 0 1 .577-.284L8.998 5zM12.51 9.14a1 1 0 0 0-1.3 1.473l.082.094L12.583 12l-1.292 1.293-.083.094a1 1 0 0 0 1.403 1.403l.094-.083 1.293-1.292 1.293 1.292.094.083a1 1 0 0 0 1.403-1.403l-.083-.094L15.413 12l1.292-1.293.083-.094a1 1 0 0 0-1.403-1.403l-.094.083-1.293 1.292-1.293-1.292-.094-.083z"
      />
    </g>
    <defs>
      <clipPath id="backspace-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBackspaceIcon;
