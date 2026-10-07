import * as React from 'react';

/**
 * Botón de acción de Sight. Pastilla de esquina completa, peso semibold, tracking negativo.
 */
export interface ButtonProps {
  /** Tratamiento visual. */
  variant?: 'primary' | 'secondary' | 'lime' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  /** Si se pasa, el botón se renderiza como <a>. */
  href?: string;
  icon?: React.ReactNode;
  iconAfter?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export function Button(props: ButtonProps): JSX.Element;
