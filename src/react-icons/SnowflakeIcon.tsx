import React from "react";

export const SnowflakeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_63485)">
<path d="M10 4L12 5L14 4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 2V8.5L15 10.22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.9297 6.26953L18.0637 8.50153L19.9297 9.73353"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.6602 7L15.0312 10.25L15.0413 13.708"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.9297 14.2695L18.0637 15.5015L17.9297 17.7335"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.6581 17L15.0291 13.75L12.0391 15.488"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 20L12 19L10 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22.0013V15.5013L9 13.7812"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.07031 17.7335L5.93631 15.5015L4.07031 14.2695"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.33984 17.001L8.96884 13.751L8.95884 10.293"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.07031 9.73353L5.93631 8.50153L6.07031 6.26953"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.33984 7L8.96884 10.25L11.9588 8.512"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63485">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
