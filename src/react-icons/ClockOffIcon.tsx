import React from "react";

export const ClockOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78485)">
<path d="M5.63338 5.63943C4.787 6.47315 4.11406 7.4662 3.65338 8.5613C3.1927 9.65639 2.9534 10.8319 2.94927 12.0199C2.94515 13.2079 3.17628 14.385 3.62935 15.4833C4.08241 16.5816 4.74844 17.5793 5.58901 18.4189C6.42958 19.2584 7.42806 19.9233 8.52686 20.3751C9.62566 20.8268 10.803 21.0566 11.9911 21.0511C13.1791 21.0455 14.3543 20.8048 15.4488 20.3429C16.5434 19.8809 17.5357 19.2068 18.3684 18.3594M20.0424 16.0394C20.8914 14.349 21.1862 12.4339 20.8849 10.5664C20.5835 8.69882 19.7014 6.97369 18.3638 5.63605C17.0261 4.29841 15.301 3.41626 13.4334 3.11493C11.5659 2.81359 9.65085 3.10838 7.96038 3.95743"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7V8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78485">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
