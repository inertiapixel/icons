import * as React from "react";
import type { SVGProps } from "react";
const SvgMedicalCrossOff = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#medical-cross-off_svg__a)"
    >
      <path d="m17.926 17.733-.574-.331-3.354-1.938V20a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-4.536L6.07 17.732a1 1 0 0 1-1.366-.366l-1-1.732a1 1 0 0 1 .366-1.366L7.997 12 4.07 9.732a1 1 0 0 1-.366-1.366l1-1.732a1 1 0 0 1 1.366-.366l.333.192M9.998 6V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4.535l3.928-2.267a1 1 0 0 1 1.366.366l1 1.732a1 1 0 0 1-.366 1.366L16 12l3.927 2.269a1 1 0 0 1 .366 1.366l-.24.416M3 3l18 18" />
    </g>
    <defs>
      <clipPath id="medical-cross-off_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMedicalCrossOff;
