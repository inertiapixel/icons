import React from "react";

export const LetterCaseToggleIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_70676)">
<path d="M3 15.5C3 15.9596 3.09053 16.4148 3.26642 16.8394C3.44231 17.264 3.70012 17.6499 4.02513 17.9749C4.35013 18.2999 4.73597 18.5577 5.16061 18.7336C5.58525 18.9095 6.04037 19 6.5 19C6.95963 19 7.41475 18.9095 7.83939 18.7336C8.26403 18.5577 8.64987 18.2999 8.97487 17.9749C9.29988 17.6499 9.55769 17.264 9.73358 16.8394C9.90947 16.4148 10 15.9596 10 15.5C10 15.0404 9.90947 14.5852 9.73358 14.1606C9.55769 13.736 9.29988 13.3501 8.97487 13.0251C8.64987 12.7001 8.26403 12.4423 7.83939 12.2664C7.41475 12.0905 6.95963 12 6.5 12C6.04037 12 5.58525 12.0905 5.16061 12.2664C4.73597 12.4423 4.35013 12.7001 4.02513 13.0251C3.70012 13.3501 3.44231 13.736 3.26642 14.1606C3.09053 14.5852 3 15.0404 3 15.5Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 19V8.5C14 7.57174 14.3687 6.6815 15.0251 6.02513C15.6815 5.36875 16.5717 5 17.5 5C18.4283 5 19.3185 5.36875 19.9749 6.02513C20.6313 6.6815 21 7.57174 21 8.5V19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 13H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 12V19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_70676">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
