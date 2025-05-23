import React from "react";

export const HandClickIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72482)">
<path d="M8 13V4.5C8 4.10218 8.15804 3.72064 8.43934 3.43934C8.72064 3.15804 9.10218 3 9.5 3C9.89782 3 10.2794 3.15804 10.5607 3.43934C10.842 3.72064 11 4.10218 11 4.5V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 11.5V9.5C11 9.10218 11.158 8.72064 11.4393 8.43934C11.7206 8.15804 12.1022 8 12.5 8C12.8978 8 13.2794 8.15804 13.5607 8.43934C13.842 8.72064 14 9.10218 14 9.5V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 10.5C14 10.1022 14.158 9.72064 14.4393 9.43934C14.7206 9.15804 15.1022 9 15.5 9C15.8978 9 16.2794 9.15804 16.5607 9.43934C16.842 9.72064 17 10.1022 17 10.5V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.9982 11.5C16.9982 11.1022 17.1563 10.7206 17.4376 10.4393C17.7189 10.158 18.1004 10 18.4982 10C18.8961 10 19.2776 10.158 19.5589 10.4393C19.8402 10.7206 19.9982 11.1022 19.9982 11.5V16C19.9982 17.5913 19.3661 19.1174 18.2409 20.2426C17.1157 21.3679 15.5895 22 13.9982 22H11.9982H12.2062C11.2126 22.0002 10.2344 21.7535 9.35961 21.2823C8.48481 20.811 7.74075 20.1299 7.19423 19.3L6.99823 19C6.68623 18.521 5.59123 16.612 3.71223 13.272C3.52068 12.9315 3.46951 12.5298 3.56961 12.1522C3.66971 11.7745 3.91318 11.4509 4.24823 11.25C4.60511 11.0359 5.0233 10.9471 5.43639 10.9978C5.84948 11.0486 6.23377 11.2359 6.52823 11.53L7.99823 13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 3L4 2"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 7H3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 3L15 2"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 6H16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72482">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
