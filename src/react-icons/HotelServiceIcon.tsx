import React from "react";

export const HotelServiceIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71585)">
<path d="M8.5 10C8.10218 10 7.72064 9.84196 7.43934 9.56066C7.15804 9.27936 7 8.89782 7 8.5C7 7.04131 7.57946 5.64236 8.61091 4.61091C9.64236 3.57946 11.0413 3 12.5 3C13.9587 3 15.3576 3.57946 16.3891 4.61091C17.4205 5.64236 18 7.04131 18 8.5V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H9C8.46957 21 7.96086 20.7893 7.58579 20.4142C7.21071 20.0391 7 19.5304 7 19V17C7 15.62 7.71 14.556 8.88 13.825L13.304 11.06C14.359 10.4 15 9.744 15 8.5C15 7.83696 14.7366 7.20107 14.2678 6.73223C13.7989 6.26339 13.163 6 12.5 6C11.837 6 11.2011 6.26339 10.7322 6.73223C10.2634 7.20107 10 7.83696 10 8.5C10 8.89782 9.84196 9.27936 9.56066 9.56066C9.27936 9.84196 8.89782 10 8.5 10Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71585">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
