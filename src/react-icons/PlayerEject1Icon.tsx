import React from "react";

export const PlayerEject1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66184)">
<path d="M5 12H19L12 4L5 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 17C5 16.7348 5.10536 16.4804 5.29289 16.2929C5.48043 16.1054 5.73478 16 6 16H18C18.2652 16 18.5196 16.1054 18.7071 16.2929C18.8946 16.4804 19 16.7348 19 17V19C19 19.2652 18.8946 19.5196 18.7071 19.7071C18.5196 19.8946 18.2652 20 18 20H6C5.73478 20 5.48043 19.8946 5.29289 19.7071C5.10536 19.5196 5 19.2652 5 19V17Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66184">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
