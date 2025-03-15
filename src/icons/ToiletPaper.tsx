import * as React from "react";
import type { SVGProps } from "react";
const SvgToiletPaper = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#toilet-paper_svg__a)"
    >
      <path d="M3 10c0 1.857.316 3.637.879 4.95S5.204 17 6 17s1.559-.738 2.121-2.05C8.684 13.637 9 11.857 9 10s-.316-3.637-.879-4.95C7.56 3.738 6.796 3 6 3s-1.559.737-2.121 2.05S3 8.143 3 10M21 10c0-3.866-1.343-7-3-7M6 3h12M21 10v10l-3-1-3 2-3-3-3 2V10M6 10h.01" />
    </g>
    <defs>
      <clipPath id="toilet-paper_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgToiletPaper;
