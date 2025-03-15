import * as React from "react";
import type { SVGProps } from "react";
const SvgInfoTriangle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#info-triangle_svg__a)">
      <path
        fill="currentColor"
        d="M12 1.672c.954 0 1.844.467 2.39 1.247l.104.16 8.114 13.548a2.913 2.913 0 0 1-2.307 4.363l-.195.008H3.881a2.914 2.914 0 0 1-2.582-4.2l.1-.185 8.11-13.538a2.91 2.91 0 0 1 2.49-1.403m0 9.33h-1l-.118.007a1 1 0 0 0 0 1.986l.117.007v3l.007.117a1 1 0 0 0 .876.876l.117.007h1l.117-.007a1 1 0 0 0 .876-.876l.007-.117-.007-.117a1 1 0 0 0-.764-.857l-.112-.02-.117-.006v-3l-.007-.117a1 1 0 0 0-.876-.876zm.01-3-.128.007a1 1 0 0 0 0 1.986l.117.007.127-.007a1 1 0 0 0 0-1.986z"
      />
    </g>
    <defs>
      <clipPath id="info-triangle_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgInfoTriangle;
