import React from "react";

export const IconsIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_71434)">
<path d="M3 6.5C3 6.95963 3.09053 7.41475 3.26642 7.83939C3.44231 8.26403 3.70012 8.64987 4.02513 8.97487C4.35013 9.29988 4.73597 9.55769 5.16061 9.73358C5.58525 9.90947 6.04037 10 6.5 10C6.95963 10 7.41475 9.90947 7.83939 9.73358C8.26403 9.55769 8.64987 9.29988 8.97487 8.97487C9.29988 8.64987 9.55769 8.26403 9.73358 7.83939C9.90947 7.41475 10 6.95963 10 6.5C10 6.04037 9.90947 5.58525 9.73358 5.16061C9.55769 4.73597 9.29988 4.35013 8.97487 4.02513C8.64987 3.70012 8.26403 3.44231 7.83939 3.26642C7.41475 3.09053 6.95963 3 6.5 3C6.04037 3 5.58525 3.09053 5.16061 3.26642C4.73597 3.44231 4.35013 3.70012 4.02513 4.02513C3.70012 4.35013 3.44231 4.73597 3.26642 5.16061C3.09053 5.58525 3 6.04037 3 6.5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.5 21H10.5L6.5 14L2.5 21Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 3L21 10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 10L21 3"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 14H21V21H14V14Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_71434">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
