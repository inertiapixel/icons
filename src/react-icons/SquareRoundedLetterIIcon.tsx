import React from "react";

export const SquareRoundedLetterIIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57260)">
<path d="M11.676 2.001L12 2C19.752 2 22 4.248 22 12L21.995 12.642C21.869 19.877 19.534 22 12 22L11.358 21.995C4.228 21.87 2.063 19.6 2 12.325V12C2 4.357 4.185 2.064 11.676 2.001ZM12 7C11.7348 7 11.4804 7.10536 11.2929 7.29289C11.1054 7.48043 11 7.73478 11 8V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5196 7.10536 12.2652 7 12 7Z" />
</g>
<defs>
<clipPath id="clip0_802_57260">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
