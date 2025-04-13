import React from "react";

export const StormOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_62382)">
<path d="M9.88416 9.87406C9.32111 10.4363 9.00447 11.1992 9.00391 11.9949C9.00334 12.7907 9.3189 13.554 9.88116 14.1171C10.4434 14.6801 11.2063 14.9968 12.002 14.9973C12.7978 14.9979 13.5611 14.6823 14.1242 14.1201M14.6942 10.6791C14.3942 10.0701 13.8974 9.58027 13.2842 9.28906"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.03869 7.06324C6.38917 7.71374 5.87414 8.4858 5.523 9.33535C5.17186 10.1849 4.99149 11.0953 4.99219 12.0145C4.9936 13.8711 5.73244 15.651 7.04619 16.9627C8.35994 18.2745 10.141 19.0106 11.9975 19.0092C13.854 19.0078 15.6339 18.269 16.9457 16.9552M18.5307 14.5292C19.022 13.2636 19.1347 11.8823 18.8549 10.5538C18.5752 9.22523 17.9151 8.0067 16.9551 7.04662C15.9952 6.08654 14.7767 5.42635 13.4482 5.14646C12.1197 4.86657 10.7384 4.97906 9.47269 5.47024"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.36924 14.2357C3.76424 10.8077 3.77224 7.56272 4.36924 4.38672"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.6289 9.76172C19.5505 11.7156 20.0181 13.8525 19.9969 16.0127M19.6269 19.6207C19.5399 20.0807 19.4399 20.5407 19.3319 20.9977"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62382">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
