import * as React from "react";
import type { SVGProps } from "react";
const SvgBriefcaseOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#briefcase-off_svg__a)"
    >
      <path d="M11 7h8a2 2 0 0 1 2 2v8m-1.166 2.818c-.262.12-.546.182-.834.182H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2M8.184 4.158A2 2 0 0 1 9.999 3h4a2 2 0 0 1 2 2v2M12 12v.01" />
      <path d="M3 13a20 20 0 0 0 11.905 1.928m3.263-.763C19.14 13.85 20.088 13.46 21 13M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="briefcase-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBriefcaseOff;
