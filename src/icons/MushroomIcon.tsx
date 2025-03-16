import * as React from "react";
import type { SVGProps } from "react";
const SvgMushroomIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#mushroom-icon_svg__a)">
      <path
        fill="currentColor"
        d="M15 15v4a3 3 0 0 1-5.995.176L9 19v-4zM4.9 13a1.9 1.9 0 0 1-1.894-1.752L3 11.1C3 6.077 7.027 2 12 2s9 4.077 9 9.1a1.9 1.9 0 0 1-1.752 1.894L19.1 13z"
      />
    </g>
    <defs>
      <clipPath id="mushroom-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMushroomIcon;
