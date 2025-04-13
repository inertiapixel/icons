import React from "react";

export const Number123Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67434)">
<path d="M3 10L5 8V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 8H12C12.2652 8 12.5196 8.10536 12.7071 8.29289C12.8946 8.48043 13 8.73478 13 9V11C13 11.2652 12.8946 11.5196 12.7071 11.7071C12.5196 11.8946 12.2652 12 12 12H10C9.73478 12 9.48043 12.1054 9.29289 12.2929C9.10536 12.4804 9 12.7348 9 13V15C9 15.2652 9.10536 15.5196 9.29289 15.7071C9.48043 15.8946 9.73478 16 10 16H13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 8H19.5C19.8978 8 20.2794 8.15804 20.5607 8.43934C20.842 8.72064 21 9.10218 21 9.5V10.5C21 10.8978 20.842 11.2794 20.5607 11.5607C20.2794 11.842 19.8978 12 19.5 12M19.5 12H18M19.5 12C19.8978 12 20.2794 12.158 20.5607 12.4393C20.842 12.7206 21 13.1022 21 13.5V14.5C21 14.8978 20.842 15.2794 20.5607 15.5607C20.2794 15.842 19.8978 16 19.5 16H17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67434">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
