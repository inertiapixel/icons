import React from "react";

export const CloudDataConnectionIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_78354)">
<path d="M5 9.89689C5 8.18289 6.46 6.79289 8.26 6.79289C8.535 5.57289 9.515 4.57789 10.832 4.18189C12.149 3.78489 13.602 4.04789 14.643 4.87189C15.685 5.69389 16.157 6.95189 15.882 8.17189H16.575C17.2167 8.17056 17.8326 8.42412 18.2873 8.8768C18.7421 9.32949 18.9984 9.94424 19 10.5859C18.9984 11.2275 18.7421 11.8423 18.2873 12.295C17.8326 12.7477 17.2167 13.0012 16.575 12.9999H8.26C6.46 12.9999 5 11.6099 5 9.89689Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 13V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 18C10 18.5304 10.2107 19.0391 10.5858 19.4142C10.9609 19.7893 11.4696 20 12 20C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18C14 17.4696 13.7893 16.9609 13.4142 16.5858C13.0391 16.2107 12.5304 16 12 16C11.4696 16 10.9609 16.2107 10.5858 16.5858C10.2107 16.9609 10 17.4696 10 18Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 18H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 18H10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_78354">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
