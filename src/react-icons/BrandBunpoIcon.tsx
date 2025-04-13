import React from "react";

export const BrandBunpoIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82653)">
<path d="M3.89844 7.20508C5.10194 8.30212 6.45057 9.22846 7.90644 9.95808C9.33994 10.5957 10.9306 10.7931 12.4764 10.5251C13.9764 10.1951 15.3834 9.52508 16.5974 8.56908C17.7194 7.77276 18.6974 6.79104 19.4894 5.66608C20.0924 4.72608 20.2344 3.90008 19.9734 3.43508C19.7124 2.97008 19.0464 2.86708 18.2534 3.17808C17.2447 3.65539 16.3541 4.34999 15.6454 5.21208C14.6216 6.39181 13.752 7.69694 13.0574 9.09608C12.2278 10.7296 11.528 12.4258 10.9644 14.1691C10.5766 15.3036 10.3488 16.4867 10.2874 17.6841C10.2174 18.4361 10.3574 19.1941 10.6924 19.8681C11.0154 20.4301 11.7524 21.0001 13.0354 21.0001C16.5094 21.0001 18.1284 17.4701 18.4984 15.3801C18.7384 14.0151 18.4134 12.1831 17.3164 11.3701"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82653">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
