import * as React from "react";
import type { SVGProps } from "react";
const SvgApps = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#apps_svg__a)">
      <path d="M9 3H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M9 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2M19 13h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2M16.999 3a1 1 0 0 1 .993.883l.007.117v2h2a1 1 0 0 1 .117 1.993L19.999 8h-2v2a1 1 0 0 1-1.993.117L15.999 10V8h-2a1 1 0 0 1-.117-1.993L13.999 6h2V4a1 1 0 0 1 1-1" />
    </g>
    <defs>
      <clipPath id="apps_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgApps;
