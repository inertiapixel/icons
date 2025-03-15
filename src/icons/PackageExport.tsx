import * as React from "react";
import type { SVGProps } from "react";
const SvgPackageExport = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#package-export_svg__a)"
    >
      <path d="m12 21-8-4.5v-9L12 3l8 4.5V12M12 12l8-4.5M12 12v9M12 12 4 7.5M15 18h7M19 15l3 3-3 3" />
    </g>
    <defs>
      <clipPath id="package-export_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPackageExport;
