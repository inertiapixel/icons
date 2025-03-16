import * as React from "react";
import type { SVGProps } from "react";
const SvgBowlIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#bowl-icon_svg__a)">
      <path
        fill="currentColor"
        d="M20 7a2 2 0 0 1 2 2v.5c0 1.694-2.247 5.49-3.983 6.983l-.017.013V17a2 2 0 0 1-1.85 1.995L16 19H8a2 2 0 0 1-2-2v-.496l-.065-.053c-1.76-1.496-3.794-4.965-3.928-6.77L2 9.5V9a2 2 0 0 1 2-2z"
      />
    </g>
    <defs>
      <clipPath id="bowl-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBowlIcon;
