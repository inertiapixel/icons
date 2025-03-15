import * as React from "react";
import type { SVGProps } from "react";
const SvgWorldUpload = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#world-upload_svg__a)"
    >
      <path d="M21 12a9 9 0 1 0-9 9M3.602 9h16.8M3.602 15h8.4" />
      <path d="M11.578 3a17 17 0 0 0 0 18M12.5 3c1.719 2.755 2.5 5.876 2.5 9M18 21v-7m0 0 3 3m-3-3-3 3" />
    </g>
    <defs>
      <clipPath id="world-upload_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWorldUpload;
