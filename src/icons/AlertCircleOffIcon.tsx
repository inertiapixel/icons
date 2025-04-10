import React from "react";

export const AlertCircleOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_86099)">
<path d="M5.64256 5.62817C3.953 7.31429 3.00244 9.60252 3 11.9895C2.99757 14.3764 3.94345 16.6666 5.62956 18.3562C7.31567 20.0457 9.6039 20.9963 11.9909 20.9987C14.3778 21.0012 16.668 20.0553 18.3576 18.3692M20.0506 16.0202C20.8956 14.3296 21.187 12.4159 20.8834 10.5505C20.5799 8.68505 19.6967 6.96251 18.3592 5.62714C17.0218 4.29177 15.2978 3.41134 13.4319 3.1107C11.566 2.81006 9.65278 3.10446 7.96356 3.95217" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7V8" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 16H12.01" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_86099">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
