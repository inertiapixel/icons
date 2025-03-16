import * as React from "react";
import type { SVGProps } from "react";
const SvgCactusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#cactus-icon_svg__a)">
      <path
        fill="currentColor"
        d="M7 21.999a1 1 0 0 1-.117-1.993L7 19.999h2v-6a4 4 0 0 1-3.995-3.8L5 9.999v-1a1 1 0 0 1 1.993-.117L7 8.999v1a2 2 0 0 0 1.85 1.995l.15.005v-7a3 3 0 0 1 5.995-.176l.005.176v10a2 2 0 0 0 1.995-1.85l.005-.15v-5a1 1 0 0 1 1.993-.117l.007.117v5a4 4 0 0 1-3.8 3.995l-.2.005v3h2a1 1 0 0 1 .117 1.993l-.117.007z"
      />
    </g>
    <defs>
      <clipPath id="cactus-icon_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCactusIcon;
