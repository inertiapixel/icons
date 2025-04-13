import React from "react";

export const CloudDollarIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78349)">
<path d="M13.5 18.0039H6.657C4.085 17.9999 2 15.9929 2 13.5169C2 11.0419 4.085 9.03488 6.657 9.03488C7.05 7.27288 8.451 5.83488 10.332 5.26188C12.212 4.68988 14.288 5.06888 15.776 6.26188C17.056 7.28488 17.733 8.77188 17.649 10.2889"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 15H18.5C18.1022 15 17.7206 15.158 17.4393 15.4393C17.158 15.7206 17 16.1022 17 16.5C17 16.8978 17.158 17.2794 17.4393 17.5607C17.7206 17.842 18.1022 18 18.5 18H19.5C19.8978 18 20.2794 18.158 20.5607 18.4393C20.842 18.7206 21 19.1022 21 19.5C21 19.8978 20.842 20.2794 20.5607 20.5607C20.2794 20.842 19.8978 21 19.5 21H17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 21V22M19 14V15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78349">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
