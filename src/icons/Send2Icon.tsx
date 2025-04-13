import React from "react";

export const Send2Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_64365)">
<path d="M4.69817 4.03348L21.0002 11.9995L4.69817 19.9655C4.60512 20.0012 4.50354 20.0086 4.40633 19.9865C4.30911 19.9644 4.22065 19.9139 4.15217 19.8415C4.08169 19.7671 4.03317 19.6747 4.01199 19.5744C3.99081 19.4742 3.99779 19.37 4.03217 19.2735L6.50017 11.9995L4.03217 4.72548C3.99779 4.62896 3.99081 4.5248 4.01199 4.42454C4.03317 4.32429 4.08169 4.23185 4.15217 4.15748C4.22065 4.08503 4.30911 4.03457 4.40633 4.01249C4.50354 3.99041 4.60512 3.99772 4.69817 4.03348Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 12H21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64365">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
