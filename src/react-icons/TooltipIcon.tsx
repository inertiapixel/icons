import React from "react";

export const TooltipIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_61426)">
<path d="M10 18C10 18.5304 10.2107 19.0391 10.5858 19.4142C10.9609 19.7893 11.4696 20 12 20C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18C14 17.4696 13.7893 16.9609 13.4142 16.5858C13.0391 16.2107 12.5304 16 12 16C11.4696 16 10.9609 16.2107 10.5858 16.5858C10.2107 16.9609 10 17.4696 10 18Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 13L10.293 11.293C10.1055 11.1055 9.8512 11.0001 9.586 11H7C6.46957 11 5.96086 10.7893 5.58579 10.4142C5.21071 10.0391 5 9.53043 5 9V6C5 5.46957 5.21071 4.96086 5.58579 4.58579C5.96086 4.21071 6.46957 4 7 4H17C17.5304 4 18.0391 4.21071 18.4142 4.58579C18.7893 4.96086 19 5.46957 19 6V9C19 9.53043 18.7893 10.0391 18.4142 10.4142C18.0391 10.7893 17.5304 11 17 11H14.414C14.1488 11.0001 13.8945 11.1055 13.707 11.293L12 13Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_61426">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
