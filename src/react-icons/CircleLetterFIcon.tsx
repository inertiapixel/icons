import React from "react";

export const CircleLetterFIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58495)">
<path d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM14 7H10C9.73478 7 9.48043 7.10536 9.29289 7.29289C9.10536 7.48043 9 7.73478 9 8V16C9 16.2652 9.10536 16.5196 9.29289 16.7071C9.48043 16.8946 9.73478 17 10 17L10.117 16.993C10.3603 16.9643 10.5845 16.8474 10.7473 16.6644C10.91 16.4813 11 16.2449 11 16V13H13C13.2449 13 13.4813 12.91 13.6644 12.7473C13.8474 12.5845 13.9643 12.3603 13.993 12.117L14 12C14 11.7348 13.8946 11.4804 13.7071 11.2929C13.5196 11.1054 13.2652 11 13 11H11V9H14C14.2652 9 14.5196 8.89464 14.7071 8.70711C14.8946 8.51957 15 8.26522 15 8C15 7.73478 14.8946 7.48043 14.7071 7.29289C14.5196 7.10536 14.2652 7 14 7Z" />
</g>
<defs>
<clipPath id="clip0_802_58495">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
