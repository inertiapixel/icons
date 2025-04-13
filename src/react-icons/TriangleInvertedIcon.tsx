import React from "react";

export const TriangleInvertedIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57077)">
<path d="M20.1184 3H3.89344C3.38368 3.0036 2.88377 3.14086 2.44365 3.39808C2.00353 3.65531 1.63858 4.02349 1.38526 4.46587C1.13193 4.90826 0.999095 5.40935 1 5.91913C1.00091 6.42891 1.13554 6.92953 1.39044 7.371L9.50644 20.92C9.76608 21.3487 10.1318 21.7032 10.5683 21.9494C11.0048 22.1957 11.4974 22.3253 11.9985 22.3258C12.4997 22.3263 12.9925 22.1977 13.4295 21.9523C13.8665 21.7069 14.2329 21.3531 14.4934 20.925L22.6034 7.386C22.8614 6.94539 22.999 6.44474 23.0026 5.93419C23.0061 5.42365 22.8755 4.92113 22.6237 4.47696C22.372 4.03279 22.0079 3.66256 21.5681 3.40335C21.1282 3.14414 20.629 3.00505 20.1184 3Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_57077">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
