import React from "react";

export const UfoOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_60795)">
<path d="M16.949 9.01C19.969 9.749 21.999 11.133 21.999 12.724C21.999 13.804 21.068 14.787 19.531 15.538M16.531 16.538C15.171 16.833 13.631 17 12 17C6.48 17 2 15.091 2 12.724C2 11.134 4.04 9.739 7.07 9"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.69 10.686C16.078 10.331 17 9.71 17 9V8.965C17 6.223 14.761 4 12 4C10.875 4 9.836 4.37 9 4.992M7.293 7.289C7.09884 7.82644 6.9997 8.39357 7 8.965V9C7 9.961 8.696 10.764 10.956 10.956"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 17L17 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5 17L7 20"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 14H12.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 13H7.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 13H17.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_60795">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
