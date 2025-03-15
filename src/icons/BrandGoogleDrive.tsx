import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandGoogleDrive = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-google-drive_svg__a)"
    >
      <path d="M12 10 6 20l-3-5L9 5z" />
      <path d="M9 15h12l-3 5H6M15 15 9 5h6l6 10z" />
    </g>
    <defs>
      <clipPath id="brand-google-drive_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandGoogleDrive;
