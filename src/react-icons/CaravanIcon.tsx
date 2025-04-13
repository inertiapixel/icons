import React from "react";

export const CaravanIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_80004)">
<path d="M7 18C7 18.5304 7.21071 19.0391 7.58579 19.4142C7.96086 19.7893 8.46957 20 9 20C9.53043 20 10.0391 19.7893 10.4142 19.4142C10.7893 19.0391 11 18.5304 11 18C11 17.4696 10.7893 16.9609 10.4142 16.5858C10.0391 16.2107 9.53043 16 9 16C8.46957 16 7.96086 16.2107 7.58579 16.5858C7.21071 16.9609 7 17.4696 7 18Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 18H18C18.5304 18 19.0391 17.7893 19.4142 17.4142C19.7893 17.0391 20 16.5304 20 16V9C20 8.46957 19.7893 7.96086 19.4142 7.58579C19.0391 7.21071 18.5304 7 18 7H8.5C7.04131 7 5.64236 7.57946 4.61091 8.61091C3.57946 9.64236 3 11.0413 3 12.5V16C3 16.5304 3.21071 17.0391 3.58579 17.4142C3.96086 17.7893 4.46957 18 5 18H7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 7L15 4L16 7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 11.5C13 11.3674 13.0527 11.2402 13.1464 11.1464C13.2402 11.0527 13.3674 11 13.5 11H15.5C15.6326 11 15.7598 11.0527 15.8536 11.1464C15.9473 11.2402 16 11.3674 16 11.5V13.5C16 13.6326 15.9473 13.7598 15.8536 13.8536C15.7598 13.9473 15.6326 14 15.5 14H13.5C13.3674 14 13.2402 13.9473 13.1464 13.8536C13.0527 13.7598 13 13.6326 13 13.5V11.5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 16H22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80004">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
