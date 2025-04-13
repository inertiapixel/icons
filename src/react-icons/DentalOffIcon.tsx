import React from "react";

export const DentalOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_76885)">
<path d="M19.277 15.281C19.74 13.531 20 11.437 20 9C20 5.26 18.092 4 16 4C14.577 4 13.08 4.911 12 5.5C10.926 4.914 9.417 4 8 4M5.157 5.153C4.45 5.937 4 7.17 4 9C4 13.899 5.056 17.41 6.671 19.537C7.244 20.293 8.641 20.058 9.238 19.301C9.636 18.796 10.057 17.862 10.5 16.5C10.792 15.729 11.392 14.996 12 15C12.602 15 13.21 15.737 13.5 16.5C13.943 17.862 14.364 18.795 14.762 19.3C15.359 20.059 16.762 20.293 17.329 19.537C17.634 19.135 17.919 18.684 18.181 18.184"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 5.5L15 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_76885">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
