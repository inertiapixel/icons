import React from "react";

export const BrandTailwindIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81415)">
<path d="M11.667 6C9.177 6 7.623 7.222 7 9.667C7.933 8.444 9.023 7.987 10.267 8.292C10.977 8.466 11.484 8.972 12.045 9.532C12.961 10.444 14.045 11.5 16.333 11.5C18.823 11.5 20.377 10.278 21 7.833C20.067 9.056 18.977 9.513 17.733 9.208C17.023 9.034 16.516 8.528 15.955 7.968C15.039 7.056 13.98 6 11.667 6ZM7.667 12.5C5.177 12.5 3.623 13.722 3 16.167C3.933 14.944 5.023 14.487 6.267 14.792C6.977 14.966 7.484 15.472 8.045 16.032C8.961 16.944 10.02 18 12.333 18C14.823 18 16.377 16.778 17 14.333C16.067 15.556 14.977 16.013 13.733 15.708C13.023 15.534 12.516 15.028 11.955 14.468C11.039 13.556 9.98 12.5 7.667 12.5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81415">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
