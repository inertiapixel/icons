import React from "react";

export const WashIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_59948)">
<path d="M3.48438 8.96519C3.65237 8.98519 3.82437 8.99819 3.99837 9.00019C4.78837 9.00919 5.53737 8.82219 5.99837 8.50019C6.45937 8.18019 7.20837 7.99319 7.99837 8.00019C8.78837 7.99319 9.53737 8.18019 9.99837 8.50019C10.4594 8.82219 11.2084 9.00919 11.9984 9.00019C12.7884 9.00919 13.5374 8.82219 13.9984 8.50019C14.4594 8.18019 15.2084 7.99319 15.9984 8.00019C16.7884 7.99319 17.5374 8.18019 17.9984 8.50019C18.4594 8.82219 19.2084 9.00919 19.9984 9.00019C20.1684 9.00019 20.3374 8.98619 20.5014 8.96619" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 6L4.721 16.329C4.79888 16.796 5.0399 17.2202 5.40118 17.5262C5.76245 17.8322 6.22056 18.0001 6.694 18H17.306C17.7794 18.0001 18.2375 17.8322 18.5988 17.5262C18.9601 17.2202 19.2011 16.796 19.279 16.329L21 6" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_59948">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
