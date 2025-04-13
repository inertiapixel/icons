import React from "react";

export const TimelineEventPlusIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_61546)">
<path d="M10 20C10 20.5304 10.2107 21.0391 10.5858 21.4142C10.9609 21.7893 11.4696 22 12 22C12.5304 22 13.0391 21.7893 13.4142 21.4142C13.7893 21.0391 14 20.5304 14 20C14 19.4696 13.7893 18.9609 13.4142 18.5858C13.0391 18.2107 12.5304 18 12 18C11.4696 18 10.9609 18.2107 10.5858 18.5858C10.2107 18.9609 10 19.4696 10 20Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 20H4"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 20H20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 15L10 13H7C6.73478 13 6.48043 12.8946 6.29289 12.7071C6.10536 12.5196 6 12.2652 6 12V4C6 3.73478 6.10536 3.48043 6.29289 3.29289C6.48043 3.10536 6.73478 3 7 3H17C17.2652 3 17.5196 3.10536 17.7071 3.29289C17.8946 3.48043 18 3.73478 18 4V12C18 12.2652 17.8946 12.5196 17.7071 12.7071C17.5196 12.8946 17.2652 13 17 13H14L12 15Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 8H14"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 6V10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_61546">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
