import React from "react";

export const CircleLetterTIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58453)">
<path d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM14 7H10C9.73478 7 9.48043 7.10536 9.29289 7.29289C9.10536 7.48043 9 7.73478 9 8C9 8.26522 9.10536 8.51957 9.29289 8.70711C9.48043 8.89464 9.73478 9 10 9H11V16C11 16.2449 11.09 16.4813 11.2527 16.6644C11.4155 16.8474 11.6397 16.9643 11.883 16.993L12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V9H14C14.2449 8.99997 14.4813 8.91004 14.6644 8.74728C14.8474 8.58453 14.9643 8.36025 14.993 8.117L15 8C15 7.73478 14.8946 7.48043 14.7071 7.29289C14.5196 7.10536 14.2652 7 14 7Z" />
</g>
<defs>
<clipPath id="clip0_802_58453">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
