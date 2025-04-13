import React from "react";

export const CashIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_79920)">
<path d="M7 11C7 10.4696 7.21071 9.96086 7.58579 9.58579C7.96086 9.21071 8.46957 9 9 9H19C19.5304 9 20.0391 9.21071 20.4142 9.58579C20.7893 9.96086 21 10.4696 21 11V17C21 17.5304 20.7893 18.0391 20.4142 18.4142C20.0391 18.7893 19.5304 19 19 19H9C8.46957 19 7.96086 18.7893 7.58579 18.4142C7.21071 18.0391 7 17.5304 7 17V11Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 14C12 14.5304 12.2107 15.0391 12.5858 15.4142C12.9609 15.7893 13.4696 16 14 16C14.5304 16 15.0391 15.7893 15.4142 15.4142C15.7893 15.0391 16 14.5304 16 14C16 13.4696 15.7893 12.9609 15.4142 12.5858C15.0391 12.2107 14.5304 12 14 12C13.4696 12 12.9609 12.2107 12.5858 12.5858C12.2107 12.9609 12 13.4696 12 14Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 9V7C17 6.46957 16.7893 5.96086 16.4142 5.58579C16.0391 5.21071 15.5304 5 15 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V13C3 13.5304 3.21071 14.0391 3.58579 14.4142C3.96086 14.7893 4.46957 15 5 15H7"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_79920">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
