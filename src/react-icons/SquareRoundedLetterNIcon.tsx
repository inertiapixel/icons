import React from "react";

export const SquareRoundedLetterNIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_57239)">
<path d="M11.676 2.001L12 2C19.752 2 22 4.248 22 12L21.995 12.642C21.869 19.877 19.534 22 12 22L11.358 21.995C4.228 21.87 2.063 19.6 2 12.325V12C2 4.357 4.185 2.064 11.676 2.001ZM10.894 7.553C10.423 6.609 9 6.945 9 8V16C9 16.2652 9.10536 16.5196 9.29289 16.7071C9.48043 16.8946 9.73478 17 10 17L10.117 16.993C10.3603 16.9643 10.5845 16.8474 10.7473 16.6644C10.91 16.4813 11 16.2449 11 16V12.236L13.106 16.447C13.577 17.391 15 17.055 15 16V8C15 7.73478 14.8946 7.48043 14.7071 7.29289C14.5196 7.10536 14.2652 7 14 7L13.883 7.007C13.6397 7.03566 13.4155 7.15259 13.2527 7.33563C13.09 7.51866 13 7.75507 13 8V11.764L10.894 7.553Z" />
</g>
<defs>
<clipPath id="clip0_802_57239">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
