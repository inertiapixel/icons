import React from "react";

export const Spade1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_63265)">
<path d="M11.9999 3L16.9189 7.5C17.5289 8.087 18.0959 8.677 18.6219 9.271C19.4625 10.2261 19.9478 11.4421 19.9959 12.7135C20.044 13.985 19.652 15.2341 18.8859 16.25C17.7059 17.81 15.5479 18.17 13.9999 17V18L14.9999 21H8.99994L9.99994 18V17C8.45994 18.07 6.26494 17.772 5.11394 16.25C4.34791 15.2341 3.95586 13.985 4.00395 12.7135C4.05205 11.4421 4.53735 10.2261 5.37794 9.271C5.92189 8.65831 6.49001 8.06751 7.08094 7.5C8.71736 5.99646 10.357 4.49645 11.9999 3Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63265">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
