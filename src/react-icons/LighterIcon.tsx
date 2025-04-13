import React from "react";

export const LighterIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_70441)">
<path d="M10 3V19C10 19.5304 10.2107 20.0391 10.5858 20.4142C10.9609 20.7893 11.4696 21 12 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V12H7C6.46957 12 5.96086 11.7893 5.58579 11.4142C5.21071 11.0391 5 10.5304 5 10V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H10Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.9994 4L17.4644 5.638C17.7258 5.91903 17.9008 6.26935 17.9686 6.64715C18.0363 7.02495 17.994 7.41426 17.8465 7.76862C17.699 8.12298 17.4527 8.42742 17.1369 8.64561C16.8211 8.86379 16.4493 8.98651 16.0656 8.99911C15.682 9.0117 15.3029 8.91365 14.9735 8.71665C14.6441 8.51964 14.3783 8.23202 14.2079 7.88809C14.0375 7.54417 13.9697 7.15848 14.0125 6.77705C14.0553 6.39563 14.207 6.03458 14.4494 5.737L15.9994 4Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_70441">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
