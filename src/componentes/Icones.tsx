// Ícones em SVG, sem precisar de biblioteca externa.

type PropriedadesIcone = {
  className?: string;
};

export function IconeGithub(propriedades: PropriedadesIcone) {
  return (
    <svg className={propriedades.className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.05 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.34 9.34 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.71 1.03 1.62 1.03 2.74 0 3.92-2.34 4.78-4.57 5.04.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

export function IconeLinkedin(propriedades: PropriedadesIcone) {
  return (
    <svg className={propriedades.className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.74v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.74C24 .78 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function IconeWhatsapp(propriedades: PropriedadesIcone) {
  return (
    <svg className={propriedades.className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M.05 24l1.7-6.2A11.86 11.86 0 0 1 .14 11.9C.14 5.34 5.48 0 12.04 0a11.82 11.82 0 0 1 8.42 3.49 11.82 11.82 0 0 1 3.49 8.43c0 6.56-5.34 11.9-11.9 11.9a11.9 11.9 0 0 1-5.7-1.45L.05 24Zm6.6-3.8c1.68.99 3.28 1.59 5.39 1.59 5.45 0 9.89-4.43 9.89-9.88 0-5.46-4.42-9.88-9.88-9.88-5.46 0-9.88 4.42-9.88 9.88 0 2.22.65 3.88 1.74 5.62l-1 3.66 3.74-.98Zm10.94-5.55c-.07-.12-.27-.2-.56-.34-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.34.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.91-2.19-.24-.57-.48-.5-.66-.5l-.56-.02c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46 0 1.45 1.06 2.85 1.2 3.05.15.2 2.08 3.18 5.05 4.46.7.3 1.25.48 1.68.62.7.22 1.35.19 1.86.12.57-.09 1.76-.72 2-1.42.25-.7.25-1.29.18-1.41Z" />
    </svg>
  );
}

export function IconeSeta(propriedades: PropriedadesIcone) {
  return (
    <svg className={propriedades.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export function IconeUsuario(propriedades: PropriedadesIcone) {
  return (
    <svg className={propriedades.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.5-6 8-6s8 2 8 6" />
    </svg>
  );
}
