import React from "react";

export const WashPressIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_60006)">
<path d="M3.48438 7.96519C3.65237 7.98519 3.82437 7.99819 3.99837 8.00019C4.78837 8.00919 5.53737 7.82219 5.99837 7.50019C6.45937 7.18019 7.20837 6.99319 7.99837 7.00019C8.78837 6.99319 9.53737 7.18019 9.99837 7.50019C10.4594 7.82219 11.2084 8.00919 11.9984 8.00019C12.7884 8.00919 13.5374 7.82219 13.9984 7.50019C14.4594 7.18019 15.2084 6.99319 15.9984 7.00019C16.7884 6.99319 17.5374 7.18019 17.9984 7.50019C18.4594 7.82219 19.2084 8.00919 19.9984 8.00019C20.1684 8.00019 20.3374 7.98619 20.5014 7.96619" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 5L4.721 15.329C4.79888 15.796 5.0399 16.2202 5.40118 16.5262C5.76245 16.8322 6.22056 17.0001 6.694 17H17.306C17.7794 17.0001 18.2375 16.8322 18.5988 16.5262C18.9601 16.2202 19.2011 15.796 19.279 15.329L21 5" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 20H19" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60006">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
