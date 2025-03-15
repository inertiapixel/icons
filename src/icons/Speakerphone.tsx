import * as React from "react";
import type { SVGProps } from "react";
const SvgSpeakerphone = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#speakerphone_svg__a)"
    >
      <path d="M18 8a3 3 0 0 1 0 6M10 8v11a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-5" />
      <path d="m12 8.002 4.524-3.77A.9.9 0 0 1 18 4.924V17.08a.9.9 0 0 1-1.476.692L12 14.002H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z" />
    </g>
    <defs>
      <clipPath id="speakerphone_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSpeakerphone;
