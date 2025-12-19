import React from 'react';

// Lightweight SVG icon set to avoid vendor bundles
const SvgIcon = React.forwardRef(function SvgIcon({ children, title, ...props }, ref) {
  return (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : 'presentation'}
      focusable="false"
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
});

export function IconDownload(props) {
  return (
    <SvgIcon
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v12" />
      <path d="m8.5 11.5 3.5 3.5 3.5-3.5" />
      <path d="M5 19h14" />
    </SvgIcon>
  );
}

export function IconLinkedIn(props) {
  return (
    <SvgIcon
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx={5} cy={6} r={1.6} />
      <rect x={3} y={9} width={3.4} height={9} rx={0.8} />
      <path d="M10 9h3v1.7h.05c.55-.95 1.5-1.9 3.2-1.9 2.7 0 3.9 1.7 3.9 4.7V18h-3.2v-3.4c0-1.4-.02-2.9-1.8-2.9-1.8 0-2 1.5-2 2.9V18H10Z" />
    </SvgIcon>
  );
}

export function IconGithub(props) {
  return (
    <SvgIcon {...props} fill="currentColor" stroke="none">
      <path d="M12 2.5c-5.3 0-9.5 4.2-9.5 9.5 0 4.2 2.7 7.8 6.5 9.1.5.1.7-.2.7-.5 0-.2 0-.9 0-1.7-2.7.6-3.3-1.2-3.3-1.2-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8-.8 1.6-1 .1-.6.4-1 .7-1.2-2.2-.2-4.6-1.1-4.6-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.6 1a8.8 8.8 0 014.6 0c1.8-1.3 2.6-1 2.6-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.8-2.4 4.6-4.7 4.9.4.3.7.9.7 1.8 0 1.3 0 2.4 0 2.7 0 .3.2.6.7.5 3.8-1.3 6.5-4.9 6.5-9.1 0-5.3-4.2-9.5-9.5-9.5Z" />
    </SvgIcon>
  );
}

export function IconMail(props) {
  return (
    <SvgIcon
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x={3.5} y={5.5} width={17} height={13} rx={2.2} />
      <path d="m4.5 7.5 7.5 5 7.5-5" />
    </SvgIcon>
  );
}

export function IconWhatsapp(props) {
  return (
    <SvgIcon
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 4a7 7 0 0 0-6.9 8.1l-.7 3.6 3.6-.9A7 7 0 1 0 12 4Z" />
      <path d="M9.8 10.3c0 2 2 3.9 3.9 3.9.8 0 1.2-.4 1.5-.9l.1-.1c.1-.2 0-.4-.2-.6l-.8-.6a.6.6 0 0 0-.7 0l-.5.3a3.7 3.7 0 0 1-1.8-1.8l.3-.5a.6.6 0 0 0 0-.6l-.6-.8c-.2-.2-.4-.3-.7-.2l-.1.1c-.5.4-.9.7-.9 1.5Z" />
    </SvgIcon>
  );
}

// Tech stack icons
export function IconReact(props) {
  return (
    <SvgIcon
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx={12} cy={12} r={1.6} />
      <ellipse cx={12} cy={12} rx={8} ry={3.4} transform="rotate(0 12 12)" />
      <ellipse cx={12} cy={12} rx={8} ry={3.4} transform="rotate(60 12 12)" />
      <ellipse cx={12} cy={12} rx={8} ry={3.4} transform="rotate(120 12 12)" />
    </SvgIcon>
  );
}

export function IconJavaScript(props) {
  return (
    <SvgIcon
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x={4} y={4} width={16} height={16} rx={3} />
      <path d="M10 8.5v6.1c0 1.7-2.5 1.8-2.9.4" />
      <path d="M13.6 8.5H16c1.1 0 2 .9 2 2 0 1.1-.9 2-2 2-.8 0-1.5.7-1.5 1.5 0 .8.7 1.5 1.5 1.5.6 0 1-.2 1.4-.6" />
    </SvgIcon>
  );
}

export function IconTypeScript(props) {
  return (
    <SvgIcon
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x={4} y={4} width={16} height={16} rx={2.5} />
      <path d="M8 9h8" />
      <path d="M12 9v8" />
      <path d="M9 13.5h2.5" />
      <path d="M14.5 12.5c0-.8.6-1.5 1.6-1.5s1.7.7 1.7 1.5c0 1.4-1.8 1.3-1.8 2.5v.3" />
      <path d="M16.6 17h.1" />
    </SvgIcon>
  );
}

export function IconHTML(props) {
  return (
    <SvgIcon
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8.5 8-3.5 4 3.5 4" />
      <path d="m15.5 8 3.5 4-3.5 4" />
      <path d="M10.5 7.5 13.5 16" />
    </SvgIcon>
  );
}

export function IconCSS(props) {
  return (
    <SvgIcon
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 5.5h12" />
      <path d="M7.5 10h9" />
      <path d="M9 14.5h6" />
      <path d="M10.5 19h3" />
      <path d="M7 6v13" />
      <path d="M17 6v13" />
    </SvgIcon>
  );
}

export function IconTailwind(props) {
  return (
    <SvgIcon
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.5 13c1.1-2.3 2.8-3.4 5-3.2 1 0 1.8.5 2.7 1.2 1 .8 2 .9 3 .2 0 1.8-1.1 3.8-3.5 3.8-1 0-1.8-.5-2.7-1.2-1-.8-2-.9-3-.2Z" />
      <path d="M8.5 8.5c1-2.2 2.6-3.2 4.6-3 1 0 1.7.5 2.6 1.2.9.7 1.8.9 2.8.2C18.3 8.7 17 11 14.7 11c-1 0-1.7-.4-2.6-1.1-.9-.7-1.8-.9-2.8-.2Z" />
    </SvgIcon>
  );
}

export function IconVite(props) {
  return (
    <SvgIcon
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 6.5 12 20l8-13.5-8-2Z" />
      <path d="M12 9.5v4" />
      <path d="M12 9.5 14.5 8" />
      <path d="M12 13.5 9.5 12" />
    </SvgIcon>
  );
}

export function IconNode(props) {
  return (
    <SvgIcon
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3 7 4v10l-7 4-7-4V7Z" />
      <path d="M9.5 10v5.2a2.3 2.3 0 0 0 3.2 2" />
    </SvgIcon>
  );
}

export function IconGit(props) {
  return (
    <SvgIcon
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v4.5" />
      <path d="M12 14.5V19" />
      <path d="M8 9l4 4 4-4" />
      <circle cx={12} cy={5} r={1.6} />
      <circle cx={8} cy={9} r={1.6} />
      <circle cx={16} cy={9} r={1.6} />
      <circle cx={12} cy={19} r={1.6} />
    </SvgIcon>
  );
}

export function IconJest(props) {
  return (
    <SvgIcon
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 10.5 6.5 7.5" />
      <path d="M16 10.5 17.5 7.5" />
      <path d="M9 6.5 12 4l3 2.5" />
      <path d="M7 12a5 5 0 1 0 10 0Z" />
      <path d="M9.5 12.5c.3.8 1.1 1.5 2.5 1.5s2.2-.7 2.5-1.5" />
    </SvgIcon>
  );
}

export function IconVitest(props) {
  return (
    <SvgIcon
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3 7 4v10l-7 4-7-4V7Z" />
      <path d="m9.2 12.2 1.8 1.8 3.8-3.8" />
    </SvgIcon>
  );
}
