import * as React from "react";
import type { SVGProps } from "react";
const SvgTransform = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#transform_svg__a)">
      <path d="M18 14a4 4 0 1 1-3.995 4.2L14 18l.005-.2A4 4 0 0 1 18 14M16.705 2.293a1 1 0 0 1 .083 1.32l-.083.094L15.412 5h3.586a3 3 0 0 1 2.995 2.824l.005.176v3a1 1 0 0 1-1.993.117L19.998 11V8a1 1 0 0 0-.883-.993L18.998 7h-3.585l1.292 1.293a1 1 0 0 1-1.32 1.497l-.094-.083-3-3a.98.98 0 0 1-.28-.872l.036-.146.04-.104q.087-.191.245-.334l2.96-2.958a1 1 0 0 1 1.413 0M3 12a1 1 0 0 1 .993.883L4 13v3a1 1 0 0 0 .883.993L5 17h3.585l-1.292-1.293a1 1 0 0 1-.083-1.32l.083-.094a1 1 0 0 1 1.32-.083l.094.083 3 3a.98.98 0 0 1 .28.872l-.036.146-.04.104a1 1 0 0 1-.245.334l-2.959 2.958a1 1 0 0 1-1.497-1.32l.083-.094L8.584 19H5a3 3 0 0 1-2.995-2.824L2 16v-3a1 1 0 0 1 1-1M6 2a4 4 0 1 1-3.995 4.2L2 6l.005-.2A4 4 0 0 1 6 2" />
    </g>
    <defs>
      <clipPath id="transform_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTransform;
