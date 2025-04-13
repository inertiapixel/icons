import React from "react";

export const ArrowMergeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_85273)">
<path d="M8 7L12 3L16 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 3V8.394C12.0001 9.50318 11.7263 10.5952 11.2029 11.5732C10.6796 12.5511 9.9229 13.3847 9 14C8.0771 14.6153 7.3204 15.4489 6.79705 16.4268C6.27371 17.4048 5.99992 18.4968 6 19.606V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 3V8.394C11.9999 9.50318 12.2737 10.5952 12.7971 11.5732C13.3204 12.5511 14.0771 13.3847 15 14C15.9229 14.6153 16.6796 15.4489 17.2029 16.4268C17.7263 17.4048 18.0001 18.4968 18 19.606V21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_85273">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
