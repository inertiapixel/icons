import * as React from "react";
import type { SVGProps } from "react";
const SvgCreativeCommonsZero = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#creative-commons-zero_svg__a)"
    >
      <path d="M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12" />
      <path d="M9 12c0 1.06.316 2.078.879 2.828S11.204 16 12 16s1.559-.421 2.121-1.172S15 13.061 15 12s-.316-2.078-.879-2.828S12.796 8 12 8s-1.559.421-2.121 1.172S9 10.939 9 12M14 9l-4 6" />
    </g>
    <defs>
      <clipPath id="creative-commons-zero_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCreativeCommonsZero;
