import * as React from "react";
import type { SVGProps } from "react";
const SvgAlertTriangle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#alert-triangle_svg__a)">
      <path
        fill="currentColor"
        d="M12 1.672c.954 0 1.844.467 2.39 1.247l.104.16 8.114 13.548a2.913 2.913 0 0 1-2.307 4.363l-.195.008H3.881a2.914 2.914 0 0 1-2.582-4.2l.1-.185 8.11-13.538a2.91 2.91 0 0 1 2.49-1.403m.01 13.33-.128.007a1 1 0 0 0 0 1.986l.117.007.127-.007a1 1 0 0 0 0-1.986zm-.01-7a1 1 0 0 0-.994.883L11 9.002v4l.007.117a1 1 0 0 0 1.986 0l.007-.117v-4l-.007-.117A1 1 0 0 0 12 8.002"
      />
    </g>
    <defs>
      <clipPath id="alert-triangle_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAlertTriangle;
