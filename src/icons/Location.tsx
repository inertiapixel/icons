import * as React from "react";
import type { SVGProps } from "react";
const SvgLocation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#location_svg__a)">
      <path
        fill="currentColor"
        d="M20.89 2.006 20.998 2l.13.008.09.016.123.035.107.046.1.057.09.067.082.075.052.059.082.116.052.096q.07.15.09.316l.005.106q0 .113-.024.22l-.035.123-6.532 18.077a1.55 1.55 0 0 1-1.41.903 1.55 1.55 0 0 1-1.328-.747l-.065-.127-3.352-6.702-6.67-3.336a1.55 1.55 0 0 1-.898-1.259L1.68 10c0-.56.3-1.072.84-1.37l.14-.07 18.018-6.506.106-.03z"
      />
    </g>
    <defs>
      <clipPath id="location_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLocation;
