import * as React from "react";
import type { SVGProps } from "react";
const SvgTimelineEvent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#timeline-event_svg__a)">
      <path d="M12 17c1.306 0 2.418.835 2.83 2H20a1 1 0 0 1 0 2h-5.171a3 3 0 0 1-5.658 0H4a1 1 0 0 1 0-2h5.17A3 3 0 0 1 12 17M17 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.586l-1.707 1.707a1 1 0 0 1-1.32.083l-.094-.083L9.585 14H7a2 2 0 0 1-1.995-1.85L5 12V4a2 2 0 0 1 2-2z" />
    </g>
    <defs>
      <clipPath id="timeline-event_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTimelineEvent;
