import React from "react";

export const ClockRecordIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_78451)">
<path d="M20.9989 12.3006C21.0592 10.4955 20.575 8.71396 19.6093 7.1877C18.6435 5.66145 17.2409 4.46106 15.5838 3.74264C13.9267 3.02421 12.0918 2.82099 10.3177 3.15938C8.54353 3.49778 6.91224 4.36214 5.63592 5.64007C4.3596 6.91801 3.49731 8.55039 3.16116 10.325C2.82501 12.0995 3.03056 13.9342 3.75108 15.5904C4.47161 17.2466 5.67376 18.6477 7.20124 19.6115C8.72872 20.5753 10.5108 21.0572 12.3159 20.9946" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7V12L14 14" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19C16 19.7956 16.3161 20.5587 16.8787 21.1213C17.4413 21.6839 18.2044 22 19 22C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19C22 18.2044 21.6839 17.4413 21.1213 16.8787C20.5587 16.3161 19.7956 16 19 16C18.2044 16 17.4413 16.3161 16.8787 16.8787C16.3161 17.4413 16 18.2044 16 19Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78451">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
