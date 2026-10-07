import * as React from 'react';

export interface DiagnosisStep {
  title: string;
  body?: string;
  /** Sobrescribe el color del paso; por defecto Salmon → Pink → Ink → Lime. */
  color?: string;
}

/**
 * La estructura metodológica de Sight: Síntoma → Causa raíz → Tratamiento → Resultado.
 * @startingPoint section="Content" subtitle="Síntoma → Causa raíz → Tratamiento → Resultado" viewport="700x220"
 */
export interface DiagnosisTrackProps {
  steps: DiagnosisStep[];
  orientation?: 'horizontal' | 'vertical';
  style?: React.CSSProperties;
}
export function DiagnosisTrack(props: DiagnosisTrackProps): JSX.Element;
