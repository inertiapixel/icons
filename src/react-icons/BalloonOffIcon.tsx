import React from "react";

export const BalloonOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_84365)">
<path d="M14 8C14 7.46957 13.7893 6.96086 13.4142 6.58579C13.0391 6.21071 12.5304 6 12 6"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.762 3.75273C8.60162 2.91494 9.67071 2.3448 10.8342 2.11435C11.9977 1.88389 13.2034 2.00345 14.299 2.45793C15.3946 2.91241 16.3309 3.6814 16.9896 4.66777C17.6483 5.65414 17.9999 6.81362 18 7.99973C18 9.84673 17.63 11.5637 16.993 12.9927M15.403 15.4127C14.436 16.4127 13.263 16.9997 12 16.9997C8.686 16.9997 6 12.9697 6 7.99973C6 7.40673 6.086 6.83373 6.246 6.29273"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 17V18C12 18.5304 11.7893 19.0391 11.4142 19.4142C11.0391 19.7893 10.5304 20 10 20H7C6.46957 20 5.96086 20.2107 5.58579 20.5858C5.21071 20.9609 5 21.4696 5 22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_84365">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
