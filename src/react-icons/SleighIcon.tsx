import React from "react";

export const SleighIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_63553)">
<path d="M3 19H18C19.0609 19 20.0783 18.5786 20.8284 17.8284C21.5786 17.0783 22 16.0609 22 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 15H7C5.93913 15 4.92172 14.5786 4.17157 13.8284C3.42143 13.0783 3 12.0609 3 11V5L4.243 6.243C5.36812 7.36793 6.89397 7.99993 8.485 8H12V10C12 10.5304 12.2107 11.0391 12.5858 11.4142C12.9609 11.7893 13.4696 12 14 12H14.5C14.8978 12 15.2794 11.842 15.5607 11.5607C15.842 11.2794 16 10.8978 16 10.5C16 10.1022 16.158 9.72064 16.4393 9.43934C16.7206 9.15804 17.1022 9 17.5 9C17.8978 9 18.2794 9.15804 18.5607 9.43934C18.842 9.72064 19 10.1022 19 10.5V12C19 12.7956 18.6839 13.5587 18.1213 14.1213C17.5587 14.6839 16.7956 15 16 15Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 15V19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 15V19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63553">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
