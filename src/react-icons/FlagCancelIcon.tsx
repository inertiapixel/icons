import React from "react";

export const FlagCancelIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_73590)">
<path d="M13.342 14.9406C12.8459 14.703 12.3924 14.385 12 13.9996C11.0654 13.0835 9.80876 12.5703 8.5 12.5703C7.19124 12.5703 5.93464 13.0835 5 13.9996V4.9996C5.93464 4.08346 7.19124 3.57031 8.5 3.57031C9.80876 3.57031 11.0654 4.08346 12 4.9996C12.9346 5.91573 14.1912 6.42888 15.5 6.42888C16.8088 6.42888 18.0654 5.91573 19 4.9996V11.9996"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 21V14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19C16 19.7956 16.3161 20.5587 16.8787 21.1213C17.4413 21.6839 18.2044 22 19 22C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19C22 18.2044 21.6839 17.4413 21.1213 16.8787C20.5587 16.3161 19.7956 16 19 16C18.2044 16 17.4413 16.3161 16.8787 16.8787C16.3161 17.4413 16 18.2044 16 19Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 21L21 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_73590">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
