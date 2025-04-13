import React from "react";

export const CaretRightIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58633)">
<path d="M9 6.0017C9 5.1497 9.986 4.7047 10.623 5.2187L10.707 5.2947L16.707 11.2947C16.8792 11.4669 16.9826 11.696 16.9979 11.939C17.0132 12.182 16.9393 12.4223 16.79 12.6147L16.707 12.7087L10.707 18.7087L10.613 18.7917L10.536 18.8457L10.44 18.8997L10.404 18.9167L10.337 18.9437L10.229 18.9757L10.176 18.9857L10.116 18.9957L10.059 18.9997L10 19.0017L9.941 18.9997L9.883 18.9947L9.823 18.9857L9.771 18.9757L9.663 18.9437L9.596 18.9167L9.464 18.8467L9.374 18.7817L9.293 18.7087L9.21 18.6147L9.156 18.5377L9.102 18.4417L9.085 18.4057L9.058 18.3387L9.026 18.2307L9.016 18.1777L9.006 18.1177L9.002 18.0607L9 6.0017Z" />
</g>
<defs>
<clipPath id="clip0_802_58633">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
