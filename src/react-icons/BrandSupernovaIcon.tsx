import React from "react";

export const BrandSupernovaIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_81439)">
<path d="M10 12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.9991 15H15.4991C18.5371 15 20.9991 13.657 20.9991 12C20.9991 10.343 18.5371 9 15.4991 9C13.6631 9 12.0371 9.49 11.0391 10.245"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 9H8.5C5.462 9 3 10.343 3 12C3 13.657 5.462 15 8.5 15C10.344 15 11.976 14.505 12.974 13.745"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 9V8.5C15 5.462 13.657 3 12 3C10.343 3 9 5.462 9 8.5C9 10.333 9.49 11.957 10.241 12.956"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 15.0013V15.5013C9 18.5393 10.343 21.0013 12 21.0013C13.657 21.0013 15 18.5393 15 15.5013C15 13.6593 14.506 12.0293 13.748 11.0312"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_81439">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
