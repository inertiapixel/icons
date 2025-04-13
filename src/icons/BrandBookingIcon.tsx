import React from "react";

export const BrandBookingIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82670)">
<path d="M4 18V8.5C4 7.30653 4.47411 6.16193 5.31802 5.31802C6.16193 4.47411 7.30653 4 8.5 4H15.5C16.0909 4 16.6761 4.1164 17.2221 4.34254C17.768 4.56869 18.2641 4.90016 18.682 5.31802C19.0998 5.73588 19.4313 6.23196 19.6575 6.77792C19.8836 7.32389 20 7.90905 20 8.5V15.5C20 16.0909 19.8836 16.6761 19.6575 17.2221C19.4313 17.768 19.0998 18.2641 18.682 18.682C18.2641 19.0998 17.768 19.4313 17.2221 19.6575C16.6761 19.8836 16.0909 20 15.5 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 12H11.5C12.0304 12 12.5391 12.2107 12.9142 12.5858C13.2893 12.9609 13.5 13.4696 13.5 14C13.5 14.5304 13.2893 15.0391 12.9142 15.4142C12.5391 15.7893 12.0304 16 11.5 16H8V9C8 8.73478 8.10536 8.48043 8.29289 8.29289C8.48043 8.10536 8.73478 8 9 8H10.5C11.0304 8 11.5391 8.21071 11.9142 8.58579C12.2893 8.96086 12.5 9.46957 12.5 10C12.5 10.5304 12.2893 11.0391 11.9142 11.4142C11.5391 11.7893 11.0304 12 10.5 12H9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 16H16.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82670">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
