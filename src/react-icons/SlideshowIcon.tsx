import React from "react";

export const SlideshowIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_63541)">
<path d="M15 6H15.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H18C18.7956 3 19.5587 3.31607 20.1213 3.87868C20.6839 4.44129 21 5.20435 21 6V14C21 14.7956 20.6839 15.5587 20.1213 16.1213C19.5587 16.6839 18.7956 17 18 17H6C5.20435 17 4.44129 16.6839 3.87868 16.1213C3.31607 15.5587 3 14.7956 3 14V6Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 13.0019L7 9.0019C7.45606 8.56306 7.97339 8.33203 8.5 8.33203C9.02661 8.33203 9.54394 8.56306 10 9.0019L14 13.0019"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 12.0019L15 10.0019C15.4561 9.56306 15.9734 9.33203 16.5 9.33203C17.0266 9.33203 17.5439 9.56306 18 10.0019L21 13.0019"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 21H8.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 21H12.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 21H16.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63541">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
