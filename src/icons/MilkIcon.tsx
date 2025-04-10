import React from "react";

export const MilkIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_68388)">
<path d="M8 6H16V4C16 3.73478 15.8946 3.48043 15.7071 3.29289C15.5196 3.10536 15.2652 3 15 3H9C8.73478 3 8.48043 3.10536 8.29289 3.29289C8.10536 3.48043 8 3.73478 8 4V6Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 6L17.094 7.759C17.6861 8.71034 17.9999 9.80846 18 10.929V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H8C7.46957 21 6.96086 20.7893 6.58579 20.4142C6.21071 20.0391 6 19.5304 6 19V10.929C6.00007 9.80846 6.31392 8.71034 6.906 7.759L8 6" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 16C10 16.5304 10.2107 17.0391 10.5858 17.4142C10.9609 17.7893 11.4696 18 12 18C12.5304 18 13.0391 17.7893 13.4142 17.4142C13.7893 17.0391 14 16.5304 14 16C14 15.4696 13.7893 14.9609 13.4142 14.5858C13.0391 14.2107 12.5304 14 12 14C11.4696 14 10.9609 14.2107 10.5858 14.5858C10.2107 14.9609 10 15.4696 10 16Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 10H14" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_68388">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
