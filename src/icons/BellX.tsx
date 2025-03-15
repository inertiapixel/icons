import * as React from "react";
import type { SVGProps } from "react";
const SvgBellX = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#bell-x_svg__a)">
      <path d="M14.234 19c.865 0 1.322 1.024.745 1.668A4 4 0 0 1 11.999 22a4 4 0 0 1-2.98-1.332c-.552-.616-.158-1.579.634-1.661l.11-.006zM12.002 2c1.358 0 2.506.903 2.875 2.141l.046.171.008.043a8.01 8.01 0 0 1 4.024 6.069l.028.287.019.289v2.931l.02.136a3 3 0 0 0 1.144 1.847l.167.117.162.099c.86.487.56 1.766-.377 1.864l-.116.006h-16c-1.028 0-1.387-1.364-.493-1.87a3 3 0 0 0 1.472-2.063l.02-.143.002-2.97A8 8 0 0 1 8.823 4.5l.249-.146.01-.043a3 3 0 0 1 2.562-2.29l.182-.017zm-1.49 6.14a1 1 0 0 0-1.217 1.567L10.587 11l-1.292 1.293-.083.094a1 1 0 0 0 1.497 1.32l1.293-1.292 1.293 1.292.094.083a1 1 0 0 0 1.32-1.497L13.417 11l1.292-1.293.083-.094a1 1 0 0 0-1.497-1.32l-1.293 1.292-1.293-1.292-.094-.083z" />
    </g>
    <defs>
      <clipPath id="bell-x_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBellX;
