import React from "react";

export const WavesElectricityIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_59920)">
<path d="M3 12.0006C3.576 11.3576 4.512 10.9836 5.5 11.0006C6.488 10.9836 7.424 11.3576 8 12.0006C8.576 12.6436 9.512 13.0176 10.5 13.0006C11.488 13.0176 12.424 12.6436 13 12.0006"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 16.0006C3.576 15.3576 4.512 14.9836 5.5 15.0006C6.488 14.9836 7.424 15.3576 8 16.0006C8.576 16.6436 9.512 17.0176 10.5 17.0006C11.488 17.0176 12.424 16.6436 13 16.0006"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 8.00056C3.576 7.35756 4.512 6.98356 5.5 7.00056C6.488 6.98356 7.424 7.35756 8 8.00056C8.576 8.64356 9.512 9.01756 10.5 9.00056C11.488 9.01756 12.424 8.64356 13 8.00056"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 7L17 12H21L18 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_59920">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
