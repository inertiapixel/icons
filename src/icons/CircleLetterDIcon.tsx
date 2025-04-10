import React from "react";

export const CircleLetterDIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_58501)">
<path d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM12 7H10C9.73478 7 9.48043 7.10536 9.29289 7.29289C9.10536 7.48043 9 7.73478 9 8V16C9 16.2652 9.10536 16.5196 9.29289 16.7071C9.48043 16.8946 9.73478 17 10 17H12C12.7956 17 13.5587 16.6839 14.1213 16.1213C14.6839 15.5587 15 14.7956 15 14V10C15 9.20435 14.6839 8.44129 14.1213 7.87868C13.5587 7.31607 12.7956 7 12 7ZM12 9C12.2652 9 12.5196 9.10536 12.7071 9.29289C12.8946 9.48043 13 9.73478 13 10V14C13 14.2652 12.8946 14.5196 12.7071 14.7071C12.5196 14.8946 12.2652 15 12 15H11V9H12Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58501">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
