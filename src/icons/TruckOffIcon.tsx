import React from "react";

export const TruckOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_60855)">
<path d="M5 17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19C7.53043 19 8.03914 18.7893 8.41421 18.4142C8.78929 18.0391 9 17.5304 9 17C9 16.4696 8.78929 15.9609 8.41421 15.5858C8.03914 15.2107 7.53043 15 7 15C6.46957 15 5.96086 15.2107 5.58579 15.5858C5.21071 15.9609 5 16.4696 5 17Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.5831 15.5859C15.3973 15.7715 15.2497 15.9918 15.149 16.2344C15.0483 16.477 14.9963 16.737 14.9961 16.9997C14.9956 17.5301 15.2059 18.039 15.5806 18.4144C15.9554 18.7899 16.4639 19.001 16.9944 19.0015C17.5248 19.002 18.0337 18.7917 18.4091 18.4169" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 17H3V6C3 5.73478 3.10536 5.48043 3.29289 5.29289C3.48043 5.10536 3.73478 5 4 5H5M8.96 5H13V9M13 13V17M9 17H15M21 17V11M21 11H15M21 11L18 6H13" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60855">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
