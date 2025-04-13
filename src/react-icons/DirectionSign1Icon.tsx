import React from "react";

export const DirectionSign1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_75341)">
<path d="M3.31944 12.7734L11.2254 20.6784C11.6524 21.1064 12.3454 21.1064 12.7734 20.6784L20.6784 12.7734C20.8836 12.5681 20.9989 12.2897 20.9989 11.9994C20.9989 11.7092 20.8836 11.4308 20.6784 11.2254L12.7734 3.32044C12.5681 3.11526 12.2897 3 11.9994 3C11.7092 3 11.4308 3.11526 11.2254 3.32044L3.32044 11.2254C3.11526 11.4308 3 11.7092 3 11.9994C3 12.2897 3.11526 12.5681 3.32044 12.7734H3.31944Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 12H15.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 8.5L15.5 12L12 15.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_75341">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
