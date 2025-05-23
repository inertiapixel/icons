import React from "react";

export const PanoramaHorizontalIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67112)">
<path d="M4.338 5.53015C9.444 7.46215 14.549 7.46215 19.655 5.53015C19.8058 5.47473 19.9677 5.45645 20.127 5.47685C20.2864 5.49725 20.4384 5.55575 20.5704 5.64737C20.7023 5.739 20.8103 5.86107 20.8851 6.00324C20.9598 6.14541 20.9993 6.30351 21 6.46415V17.4642C21 18.1562 20.308 18.6642 19.66 18.4262C14.553 16.4942 9.446 16.4942 4.339 18.4262C3.691 18.6722 3 18.1842 3 17.4912V6.46415C3.00098 6.30427 3.04028 6.14696 3.11461 6.0054C3.18894 5.86385 3.29612 5.74218 3.42718 5.6506C3.55823 5.55902 3.70933 5.50019 3.86781 5.47906C4.02629 5.45793 4.18753 5.47511 4.338 5.52915V5.53015Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67112">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
