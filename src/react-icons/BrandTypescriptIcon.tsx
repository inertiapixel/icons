import React from "react";

export const BrandTypescriptIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81304)">
<path d="M15 17.5C15.32 17.82 15.754 18 16.207 18H16.75C17.44 18 18 17.44 18 16.75V16.5C18 16.1022 17.842 15.7206 17.5607 15.4393C17.2794 15.158 16.8978 15 16.5 15C16.1022 15 15.7206 14.842 15.4393 14.5607C15.158 14.2794 15 13.8978 15 13.5V13.25C15 12.56 15.56 12 16.25 12H16.793C17.246 12 17.68 12.18 18 12.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 12H13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 12V18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81304">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
