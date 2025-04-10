import React from "react";

export const CircleLetterLIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_58477)">
<path d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM10 7C9.73478 7 9.48043 7.10536 9.29289 7.29289C9.10536 7.48043 9 7.73478 9 8V16C9 16.2652 9.10536 16.5196 9.29289 16.7071C9.48043 16.8946 9.73478 17 10 17H14C14.2652 17 14.5196 16.8946 14.7071 16.7071C14.8946 16.5196 15 16.2652 15 16L14.993 15.883C14.9643 15.6397 14.8474 15.4155 14.6644 15.2527C14.4813 15.09 14.2449 15 14 15H11V8C11 7.73478 10.8946 7.48043 10.7071 7.29289C10.5196 7.10536 10.2652 7 10 7Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58477">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
