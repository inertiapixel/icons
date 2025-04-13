import React from "react";

export const Chess1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_79477)">
<path d="M12 3C12.7956 3 13.5587 3.31607 14.1213 3.87868C14.6839 4.44129 15 5.20435 15 6C15 7.113 14.4 8.482 13.5 9L15 16H9L10.5 9C9.6 8.482 9 7.113 9 6C9 5.20435 9.31607 4.44129 9.87868 3.87868C10.4413 3.31607 11.2044 3 12 3Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 9H16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.684 16.772C6.48479 16.8383 6.31153 16.9657 6.18876 17.136C6.06599 17.3064 5.99995 17.511 6 17.721V19C6 19.2652 6.10536 19.5196 6.29289 19.7071C6.48043 19.8946 6.73478 20 7 20H17C17.2652 20 17.5196 19.8946 17.7071 19.7071C17.8946 19.5196 18 19.2652 18 19V17.72C17.9998 17.5102 17.9337 17.3058 17.8109 17.1356C17.6882 16.9655 17.515 16.8383 17.316 16.772L15 16H9L6.684 16.772Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_79477">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
