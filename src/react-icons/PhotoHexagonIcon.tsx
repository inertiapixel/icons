import React from "react";

export const PhotoHexagonIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66567)">
<path d="M15 8H15.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.875 6.26959C20.575 6.66759 21.005 7.41259 21 8.21759V15.5016C21 16.3106 20.557 17.0566 19.842 17.4496L13.092 21.7196C12.7574 21.9033 12.3818 21.9996 12 21.9996C11.6182 21.9996 11.2426 21.9033 10.908 21.7196L4.158 17.4496C3.80817 17.2584 3.51612 16.9768 3.31241 16.6341C3.1087 16.2914 3.0008 15.9003 3 15.5016V8.21659C3 7.40759 3.443 6.66259 4.158 6.26959L10.908 2.28959C11.2525 2.09963 11.6396 2 12.033 2C12.4264 2 12.8135 2.09963 13.158 2.28959L19.908 6.26959H19.875Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 15.5018L8 11.0018C8.928 10.1088 10.072 10.1088 11 11.0018L16 16.0018"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 14.0018L15 13.0018C15.928 12.1088 17.072 12.1088 18 13.0018L20.5 15.5018"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66567">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
