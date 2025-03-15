import * as React from "react";
import type { SVGProps } from "react";
const SvgSnowflakeOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#snowflake-off_svg__a)"
    >
      <path d="m10 4 2 1 2-1M12 2v6m1.196 1.186L15 10.22M17.93 6.27l.134 2.232 1.866 1.232" />
      <path d="m20.66 7-5.629 3.25L15 11M19.93 14.27l-1.016.67M14.21 14.227l-2.17 1.262M14 20l-2-1-2 1" />
      <path d="M12 22.001v-6.5l-3-1.72M6.07 17.734 5.936 15.5 4.07 14.27" />
      <path d="m3.34 17.001 5.629-3.25-.01-3.458M4.07 9.734l1.866-1.232.134-2.232" />
      <path d="m3.34 7 5.629 3.25.802-.466M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="snowflake-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSnowflakeOff;
