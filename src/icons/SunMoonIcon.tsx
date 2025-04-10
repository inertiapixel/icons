import React from "react";

export const SunMoonIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_62299)">
<path d="M9.1716 14.8286C8.80016 14.4572 8.50551 14.0162 8.30449 13.5309C8.10347 13.0456 8 12.5254 8 12.0001C8 11.4748 8.10347 10.9546 8.30449 10.4693C8.50551 9.98401 8.80016 9.54305 9.1716 9.1716C9.54305 8.80016 9.98401 8.50551 10.4693 8.30449C10.9546 8.10347 11.4748 8 12.0001 8C12.5254 8 13.0456 8.10347 13.5309 8.30449C14.0162 8.50551 14.4572 8.80016 14.8286 9.1716" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.2926 12.707L11.4666 12.954C12.4558 14.2915 13.8616 15.2622 15.4628 15.7133C17.064 16.1644 18.7697 16.0704 20.3116 15.446C19.7442 16.8115 18.849 18.0162 17.7052 18.9534C16.5615 19.8907 15.2045 20.5317 13.7541 20.8198C12.3037 21.1078 10.8047 21.0341 9.38958 20.6051C7.97447 20.1761 6.68687 19.405 5.64062 18.36" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 12H4" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 3V4" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.60156 5.60156L6.30156 6.30156" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 21L21 3" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_62299">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
