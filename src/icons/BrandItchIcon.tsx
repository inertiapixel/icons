import React from "react";

export const BrandItchIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82077)">
<path d="M2 7V8C2 9.087 3.078 10 4 10C5.107 10 6 9.09 6 8C6 9.09 6.893 10 8 10C9.107 10 10 9.09 10 8C10 9.09 10.893 10 12 10C13.107 10 14 9.09 14 8C14 9.09 14.893 10 16 10C17.107 10 18 9.09 18 8C18 9.09 18.893 10 20 10C20.922 10 22 9.087 22 8V7C21.991 6.725 21.462 6.036 20.412 4.932C20.1317 4.63743 19.7945 4.40291 19.4207 4.2427C19.047 4.08248 18.6446 3.99991 18.238 4H5.762C5.35538 3.99991 4.95299 4.08248 4.57927 4.2427C4.20555 4.40291 3.86829 4.63743 3.588 4.932C2.538 6.036 2.008 6.725 2 7Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.99911 10C3.88211 16.28 4.15311 19.765 4.81311 20.456C6.34711 20.823 9.16811 20.991 11.9991 20.992C14.8291 20.991 17.6511 20.823 19.1851 20.456C20.1751 19.419 20.0831 10.897 19.9991 10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 16L12 14L14 16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 14V18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82077">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
