import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandMeetup = (props: SVGProps<SVGSVGElement>) => (
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
      clipPath="url(#brand-meetup_svg__a)"
    >
      <path d="M5.453 10.82C6.388 8.657 8.498 7 10.998 7c2.104 0 2.844 1.915 2 4l-2 6M6.981 7 3 16.914" />
      <path d="M13 11c.937-2.16 3.071-3.803 5.42-3.973 2.104 0 3.128 1.706 2.284 3.792l-2.454 6.094C17.397 18.59 19 19.5 21 19" />
    </g>
    <defs>
      <clipPath id="brand-meetup_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBrandMeetup;
