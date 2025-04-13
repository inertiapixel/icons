import React from "react";

export const Candle1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_80151)">
<path d="M9 21H15V12C15 11.7348 14.8946 11.4804 14.7071 11.2929C14.5196 11.1054 14.2652 11 14 11H10C9.73478 11 9.48043 11.1054 9.29289 11.2929C9.10536 11.4804 9 11.7348 9 12V21Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9994 3L13.4644 4.638C13.7258 4.91903 13.9008 5.26935 13.9686 5.64715C14.0363 6.02495 13.994 6.41426 13.8465 6.76862C13.699 7.12298 13.4527 7.42742 13.1369 7.64561C12.8211 7.86379 12.4493 7.98651 12.0656 7.99911C11.682 8.0117 11.3029 7.91365 10.9735 7.71665C10.6441 7.51964 10.3783 7.23202 10.2079 6.88809C10.0375 6.54417 9.96967 6.15848 10.0125 5.77705C10.0553 5.39563 10.207 5.03458 10.4494 4.737L11.9994 3Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80151">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
