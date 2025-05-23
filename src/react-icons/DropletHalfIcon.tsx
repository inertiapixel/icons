import React from "react";

export const DropletHalfIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58202)">
<path d="M12.0006 2L12.0706 2.003C12.4226 2.01169 12.7684 2.0974 13.0837 2.2541C13.399 2.4108 13.6761 2.63468 13.8956 2.91L14.0036 3.058L18.9236 10.364C20.8756 13.631 20.1146 17.784 17.1276 20.2C14.1596 22.602 9.84262 22.602 6.87362 20.2C3.95662 17.84 3.16262 13.824 4.97262 10.55L5.10662 10.318L9.99962 3.058C10.1846 2.783 10.4256 2.549 10.7086 2.372C11.0308 2.17012 11.396 2.0468 11.7746 2.012L12.0006 2ZM11.0006 5.149L6.79462 11.389C5.35462 13.799 5.91462 16.852 8.13162 18.646C8.96025 19.3144 9.94934 19.7543 11.0006 19.922V5.149Z" />
</g>
<defs>
<clipPath id="clip0_802_58202">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
