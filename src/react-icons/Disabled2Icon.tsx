import React from "react";

export const Disabled2Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_75315)">
<path d="M15 6C15 6.53043 15.2107 7.03914 15.5858 7.41421C15.9609 7.78929 16.4696 8 17 8C17.5304 8 18.0391 7.78929 18.4142 7.41421C18.7893 7.03914 19 6.53043 19 6C19 5.46957 18.7893 4.96086 18.4142 4.58579C18.0391 4.21071 17.5304 4 17 4C16.4696 4 15.9609 4.21071 15.5858 4.58579C15.2107 4.96086 15 5.46957 15 6Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.00053 11.0007C8.14212 10.9859 7.29435 11.1923 6.53886 11.6002C5.78338 12.008 5.14563 12.6035 4.68706 13.3293C4.22848 14.0551 3.96453 14.8868 3.92061 15.7442C3.87669 16.6016 4.05429 17.4559 4.43631 18.2248C4.81833 18.9937 5.39188 19.6512 6.10174 20.1341C6.8116 20.617 7.63385 20.909 8.48929 20.9819C9.34472 21.0549 10.2045 20.9063 10.9859 20.5505C11.7673 20.1948 12.4439 19.6438 12.9505 18.9507"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 20L15 15H11L14 10L10 7L6 8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_75315">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
