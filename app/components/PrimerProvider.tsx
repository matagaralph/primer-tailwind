import { BaseStyles, ThemeProvider, theme } from '@primer/react';
import { type ReactNode } from 'react';
import deepmerge from 'deepmerge';

const customTheme = deepmerge(theme, {
  fonts: {
    normal: 'Inter-var,InterVariable, Inter, sans-serif',
  },
});

export default function PrimerProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider colorMode='light' theme={customTheme} preventSSRMismatch>
      <BaseStyles>{children}</BaseStyles>
    </ThemeProvider>
  );
}
