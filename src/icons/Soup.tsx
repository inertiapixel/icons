import * as React from "react";
import type { SVGProps } from "react";
const SvgSoup = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#soup_svg__a)">
      <path d="M20 10a2 2 0 0 1 2 2v.5c0 1.694-2.247 5.49-3.983 6.983l-.017.013V20a2 2 0 0 1-1.85 1.995L16 22H8a2 2 0 0 1-2-2v-.496l-.065-.053c-1.76-1.496-3.794-4.965-3.928-6.77L2 12.5V12a2 2 0 0 1 2-2zM11.418 3.189a1 1 0 1 1 1.166 1.624c-.375.27-.593.706-.583 1.209a1.4 1.4 0 0 0 .583 1.167 1 1 0 1 1-1.166 1.624A3.38 3.38 0 0 1 10 6.022a3.4 3.4 0 0 1 1.417-2.833M15.418 3.189a1 1 0 1 1 1.166 1.624c-.375.27-.593.706-.583 1.209a1.4 1.4 0 0 0 .583 1.167 1 1 0 1 1-1.166 1.624A3.38 3.38 0 0 1 14 6.022a3.4 3.4 0 0 1 1.417-2.833M7.418 3.189a1 1 0 1 1 1.166 1.624c-.375.27-.593.706-.583 1.209a1.4 1.4 0 0 0 .583 1.167 1 1 0 1 1-1.166 1.624A3.38 3.38 0 0 1 6 6.022a3.4 3.4 0 0 1 1.417-2.833" />
    </g>
    <defs>
      <clipPath id="soup_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSoup;
