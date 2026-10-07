import * as React from 'react';

// ── Button ──

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

// ── Tag ──

/** Etiqueta de categoría o disciplina. */
export interface TagProps {
  tone?: 'lime' | 'pink' | 'salmon' | 'cool' | 'dark' | 'quiet';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Tag(props: TagProps): JSX.Element;

// ── Badge ──

/** Indicador de estado con punto de color; texto en versalitas con tracking positivo. */
export interface BadgeProps {
  state?: 'positive' | 'attention' | 'critical' | 'neutral';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Badge(props: BadgeProps): JSX.Element;

// ── Divider ──

/** Regla horizontal. La regla roja/acento marca cortes de sección; la hairline separa filas. */
export interface DividerProps {
  tone?: 'hairline' | 'strong' | 'accent' | 'lime';
  thickness?: number;
  style?: React.CSSProperties;
}
export function Divider(props: DividerProps): JSX.Element;

// ── Wordmark ──

/**
 * Logotipo de Sight — trazado oficial vectorizado del "Manual de marca SIGHT" (p.20–25).
 * El ojo de la "g" va calado: el logotipo se coloca sobre cualquier superficie de la paleta
 * sin fondo blanco propio. Nunca lleva sombra (manual p.28, uso incorrecto 1).
 */
export interface WordmarkProps {
  /** `sight lab` = versión institucional (propuestas, documentos, presentaciones iniciales). `sight` = versión simplificada para uso digital cotidiano. */
  lockup?: 'sight' | 'sight lab';
  /** Color de la marca por rol de superficie. */
  tone?: 'ink' | 'pink' | 'lime' | 'paper';
  /** Escotilla de escape: cualquier color de la paleta. Nunca colores fuera de marca (uso incorrecto 5). */
  color?: string;
  /** Alto del arte en px (incluye el descendente de la g). El ancho se deriva de la proporción 1.866:1. */
  size?: number;
  style?: React.CSSProperties;
}
export function Wordmark(props: WordmarkProps): JSX.Element;

// ── EyeMark ──

/**
 * Símbolo de Sight: el ojo de la "g", aislado (manual p.20).
 * Uso secundario — firma en esquinas, viñeta de lista, favicon, sello sobre bloque de color.
 * No sustituye al logotipo: si la pieza necesita identificar la marca, usa `Wordmark`.
 */
export interface EyeMarkProps {
  /** Diámetro en px. */
  size?: number;
  tone?: 'ink' | 'pink' | 'lime' | 'paper';
  color?: string;
  style?: React.CSSProperties;
}
export function EyeMark(props: EyeMarkProps): JSX.Element;

// ── Marquee ──

/**
 * Banda corrida de una línea — la tira lime que separa secciones en el sitio de Sight (manual p.42).
 * Máximo una por vista, siempre a sangre. No es un lugar para mensajes que haya que leer completos:
 * es ritmo, no contenido crítico.
 */
export interface MarqueeProps {
  /** Frases cortas en minúsculas, ej. `['estrategia','diseño','crecimiento']`. */
  items?: React.ReactNode[];
  tone?: 'lime' | 'pink' | 'dark' | 'cool';
  /** Segundos por ciclo. Más alto = más lento. */
  speed?: number;
  /** Tamaño tipográfico (token o valor CSS). */
  size?: string;
  style?: React.CSSProperties;
}
export function Marquee(props: MarqueeProps): JSX.Element;

// ── Card ──

/**
 * Contenedor de bloque. Esquina recta siempre; el color de la superficie hace el trabajo, no la sombra.
 */
export interface CardProps {
  surface?: 'plain' | 'sunken' | 'warm' | 'cool' | 'lime' | 'dark' | 'accent';
  pad?: 'sm' | 'md' | 'lg';
  /** Barra de acento de 3px a la izquierda. */
  rule?: boolean;
  /** Activa elevación y desplazamiento en hover. */
  interactive?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Card(props: CardProps): JSX.Element;

// ── ColorBlock ──

/** Bloque de color a sangre con nombre, HEX y PANTONE — el lenguaje de las páginas de paleta del manual. */
export interface ColorBlockProps {
  name: string;
  hex: string;
  pantone?: string;
  /** Color del texto; por defecto blanco. Sobre Light Lime o Salt Air usa var(--deep-blue-gray). */
  textColor?: string;
  height?: number;
  style?: React.CSSProperties;
}
export function ColorBlock(props: ColorBlockProps): JSX.Element;

// ── ShapeMark ──

/**
 * Forma plana de acento — círculo, medio círculo, cuarto de círculo (manual p.39–43).
 * Es el único lugar del sistema donde la curva es protagonista: las tarjetas y los
 * bloques siguen siendo de esquina recta. Se usa sangrada al borde de la superficie.
 */
export interface ShapeMarkProps {
  shape?: 'circle' | 'square'
    | 'quarter-tl' | 'quarter-tr' | 'quarter-br' | 'quarter-bl'
    | 'half-top' | 'half-bottom' | 'half-left' | 'half-right';
  tone?: 'lime' | 'pink' | 'salmon' | 'cool' | 'warm' | 'ink';
  /** Lado en px. */
  size?: number;
  /** Opcional: un `EyeMark` o un dato corto centrado dentro de la forma. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function ShapeMark(props: ShapeMarkProps): JSX.Element;

// ── StickyNote ──

/**
 * Post-it — el objeto del que nace la paleta (manual p.31) y motivo de las piezas de
 * exterior y del sitio (p.38–42). Es el único elemento del sistema que se permite girar
 * y llevar sombra: es un objeto físico pegado sobre la superficie, no un contenedor de UI.
 */
export interface StickyNoteProps {
  tone?: 'pink' | 'lime' | 'cool' | 'warm' | 'salmon';
  /** Lado en px. El cuerpo de texto escala al 10% del lado. */
  size?: number;
  /** Rotación en grados. Mantente entre -6 y 6; una nota derecha se ve como tarjeta. */
  rotate?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function StickyNote(props: StickyNoteProps): JSX.Element;

// ── AuraField ──

/**
 * Degradado de fondo de marca. Se posiciona absoluto dentro de un contenedor
 * `position:relative; overflow:hidden`, siempre detrás del contenido.
 * Sólo colores de la paleta vibrante y neutros claros — nunca negro ni tinta,
 * nunca en botones, texto ni logotipo.
 */
export interface AuraFieldProps {
  /** Aura de dos colores; `prisma`/`amanecer`/`marea`/`espectro` de tres o cuatro; `crema-*` fondo crema con el color apenas asomando; `tile-*` ficha lineal; `bloom-*` un color; `veil-*` entre superficies. */
  combo?: 'pink-lime' | 'salmon-lime' | 'cool-pink'
    | 'prisma' | 'amanecer' | 'marea' | 'espectro'
    | 'crema-cool' | 'crema-pink' | 'crema-lime' | 'crema-prisma'
    | 'tile-warm' | 'tile-cool' | 'tile-lime'
    | 'bloom-pink' | 'bloom-lime' | 'bloom-cool'
    | 'veil-cool' | 'veil-warm' | 'veil-lime';
  /** Desenfoque en px; por defecto `--grad-blur` (40px) en auras y 0 en fichas y velos. */
  blur?: number;
  /** 0–1; por defecto 0.8 en auras y 1 en `crema-*`, `tile-*` y `veil-*`. */
  opacity?: number;
  /** Desvanece hacia ese lado. */
  fade?: 'top' | 'bottom' | 'left' | 'right';
  style?: React.CSSProperties;
}
export function AuraField(props: AuraFieldProps): JSX.Element;

// ── SectionHeading ──

/**
 * Encabezado de sección con antetítulo opcional en versalitas rosa.
 */
export interface SectionHeadingProps {
  level?: 'display' | 'title' | 'subtitle';
  /** Antetítulo corto en versalitas. */
  eyebrow?: string;
  color?: string;
  align?: 'left' | 'center';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function SectionHeading(props: SectionHeadingProps): JSX.Element;

// ── Callout ──

/** Nota destacada con barra de acento a la izquierda — el patrón de anotación del manual (p.20). */
export interface CalloutProps {
  tone?: 'lime' | 'pink' | 'cool' | 'filled';
  /** Lema en negrita al inicio del párrafo, p.ej. "sight lab:". */
  label?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Callout(props: CalloutProps): JSX.Element;

// ── Quote ──

/** Cita a gran cuerpo en peso ligero; la atribución va en rosa. */
export interface QuoteProps {
  attribution?: string;
  role?: string;
  color?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Quote(props: QuoteProps): JSX.Element;

// ── StatBlock ──

/** Cifra de evidencia: número grande, etiqueta y nota de método. */
export interface StatBlockProps {
  value: string;
  label: string;
  /** Fuente o método de la cifra — Sight no publica cifras sin origen. */
  note?: string;
  color?: string;
  align?: 'left' | 'center';
  style?: React.CSSProperties;
}
export function StatBlock(props: StatBlockProps): JSX.Element;

// ── DiagnosisTrack ──

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

// ── Highlight ──

/**
 * Resaltado de marcador sobre una palabra clave del titular (manual p.38, p.42).
 * Una sola vez por titular y sobre la palabra que carga el argumento —
 * "decisiones", "crecimiento", "vigencia" — nunca sobre una frase completa.
 */
export interface HighlightProps {
  tone?: 'lime' | 'pink' | 'salmon' | 'cool';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Highlight(props: HighlightProps): JSX.Element;

// ── PhotoFrame ──

/**
 * Marco de fotografía de marca. Toda fotografía real se publica en el duotono
 * de la casa: luz `#ade6e6`, sombra `#721f34`. Nunca fotografía a color plena,
 * nunca con esquina redondeada ni sombra.
 */
export interface PhotoFrameProps {
  /** Sin `src` renderiza el marcador rayado con la nota `label`. */
  src?: string;
  alt?: string;
  /** `duotone` (por defecto, luz #ade6e6 / sombra #721f34). Las variantes sobre otros colores de la paleta son excepción; `bw` sólo para archivo documental. */
  treatment?: 'duotone' | 'duotone-pink' | 'duotone-lime' | 'duotone-cool' | 'bw';
  /** Proporción CSS, ej. `'4 / 3'`, `'1 / 1'`, `'3 / 4'`. */
  ratio?: string;
  /** Qué debe ir en el hueco, para el marcador. */
  label?: string;
  style?: React.CSSProperties;
}
export function PhotoFrame(props: PhotoFrameProps): JSX.Element;

// ── BarChart ──

export interface BarDatum {
  label: string;
  value: number;
  /** Color de la barra; por defecto el `tone` de la gráfica. Usar otro tono sólo para destacar un dato. */
  tone?: 'pink' | 'lime' | 'salmon' | 'cool' | 'ink' | 'muted';
}

/**
 * Gráfica de barras de marca: color plano, esquina recta, línea base en tinta.
 * Una sola serie por gráfica. Nunca degradados, nunca sombra, nunca 3D.
 */
export interface BarChartProps {
  data: BarDatum[];
  orientation?: 'vertical' | 'horizontal';
  /** Color base de las barras. */
  tone?: 'pink' | 'lime' | 'salmon' | 'cool' | 'ink' | 'muted';
  /** Techo de la escala; por defecto el valor mayor. */
  max?: number;
  /** Sufijo de la cifra, ej. `'%'`. */
  unit?: string;
  /** Alto del área de barras en orientación vertical. */
  height?: number;
  style?: React.CSSProperties;
}
export function BarChart(props: BarChartProps): JSX.Element;

// ── TrendLine ──

/**
 * Serie en el tiempo: trazo plano de un color de la paleta, área opcional en su tinte claro.
 * Sin rejilla, sin marcadores intermedios; sólo el último punto va marcado.
 */
export interface TrendLineProps {
  values: number[];
  tone?: 'pink' | 'lime' | 'salmon' | 'ink';
  /** Relleno bajo la curva. */
  area?: boolean;
  height?: number;
  /** Etiquetas del eje, repartidas de extremo a extremo. */
  labels?: string[];
  style?: React.CSSProperties;
}
export function TrendLine(props: TrendLineProps): JSX.Element;

// ── RingStat ──

/**
 * Cifra en anillo para una sola proporción (avance, cobertura, porcentaje).
 * Anillo de color plano sobre pista neutra; nunca varios anillos concéntricos.
 */
export interface RingStatProps {
  /** 0–100. */
  value: number;
  /** Texto al centro si no es el porcentaje, ej. `'3.4x'`. */
  display?: string;
  label?: string;
  tone?: 'pink' | 'lime' | 'salmon' | 'ink';
  size?: number;
  /** Grosor del anillo en px. */
  thickness?: number;
  style?: React.CSSProperties;
}
export function RingStat(props: RingStatProps): JSX.Element;

// ── NestedScale ──

export interface NestedScaleDatum {
  label: string;
  /** Magnitud numérica; fija el diámetro (escala por área). */
  value: number;
  /** Cifra que se imprime dentro del círculo si no es `value`, ej. `'$34.5K'`. */
  display?: string;
  /** Una línea de contexto, sólo en `layout="nested"`. */
  note?: string;
}

/**
 * Escala anidada para magnitudes que se contienen (mercado total → disponible → alcanzable,
 * universo → muestra → casos). Color plano, cifra dentro del anillo, hover destaca el nivel.
 * Se ordena de mayor a menor automáticamente; 2–4 niveles. La cifra entra dentro del anillo
 * sólo si su banda expuesta despeja la altura de línea; si no, pasa a la etiqueta de la leyenda
 * (con `labels={false}` se omite, y el contenedor debe mostrarla por su cuenta).
 */
export interface NestedScaleProps {
  data: NestedScaleDatum[];
  /** `nested` círculos centrados + lista de etiquetas · `corner` cuartos anclados a esquina (motivo de lámina) · `row` burbujas en fila. */
  layout?: 'nested' | 'corner' | 'row';
  tone?: 'pink' | 'lime' | 'cool' | 'ink';
  /** Lado del cuadro de la gráfica en px. */
  size?: number;
  /** Esquina de anclaje en `layout="corner"`. */
  corner?: 'br' | 'bl' | 'tr' | 'tl';
  /** Muestra las etiquetas; `false` deja sólo la figura (uso decorativo). */
  labels?: boolean;
  style?: React.CSSProperties;
}
export function NestedScale(props: NestedScaleProps): JSX.Element;

// ── LayerStack ──

export interface LayerStackLayer {
  label: string;
  note?: string;
}

/**
 * Planos apilados en isometría con línea guía a la etiqueta, para jerarquías que se
 * sostienen unas sobre otras. El primer elemento es el plano superior y el único sólido:
 * los de abajo son translúcidos y sus intersecciones construyen el volumen.
 * Entrada escalonada de abajo hacia arriba; el hover separa el plano activo.
 * Dos a cuatro planos.
 */
export interface LayerStackProps {
  data: LayerStackLayer[];
  tone?: 'salmon' | 'pink' | 'lime' | 'cool';
  /** Ancho del rombo en px; el alto sale de la proporción isométrica. */
  size?: number;
  /** Separación vertical entre planos, como fracción del alto del rombo (0.4–0.6); por defecto 0.5, que es la superposición que construye el cubo. */
  gap?: number;
  style?: React.CSSProperties;
}
export function LayerStack(props: LayerStackProps): JSX.Element;

// ── SpokeDiagram ──

export interface SpokeDatum {
  label: string;
  /** Cifra corta que va dentro del satélite, ej. `'34%'`. */
  value: string | number;
}

/**
 * Núcleo con satélites radiales: una idea central y sus frentes de trabajo.
 * Los satélites entran desde el núcleo hacia afuera, escalonados; el hover destaca el radio.
 * Tres a seis satélites.
 */
export interface SpokeDiagramProps {
  data: SpokeDatum[];
  /** Texto del núcleo. */
  core?: string;
  tone?: 'pink' | 'lime' | 'ink' | 'cool';
  /** Lado del cuadro en px. */
  size?: number;
  /** Ángulo del primer satélite en grados; `-90` lo pone arriba. */
  start?: number;
  style?: React.CSSProperties;
}
export function SpokeDiagram(props: SpokeDiagramProps): JSX.Element;

// ── Field ──

/** Envoltura de campo: etiqueta arriba, ayuda o error abajo. Úsala alrededor de Input, Select o Checkbox. */
export interface FieldProps {
  label?: string;
  hint?: string;
  /** Si se pasa, sustituye a hint y se pinta en Pink Paradise. */
  error?: string;
  htmlFor?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Field(props: FieldProps): JSX.Element;

// ── Input ──

/** Campo de texto de una o varias líneas. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  multiline?: boolean;
  invalid?: boolean;
  style?: React.CSSProperties;
}
export function Input(props: InputProps): JSX.Element;

// ── Select ──

/** Desplegable de opción única. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: Array<string | { value: string; label: string }>;
  invalid?: boolean;
  style?: React.CSSProperties;
}
export function Select(props: SelectProps): JSX.Element;

// ── Checkbox ──

/** Casilla de verificación. Controlada si se pasa `checked`, no controlada si no. */
export interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export function Checkbox(props: CheckboxProps): JSX.Element;

// ── Switch ──

/** Interruptor binario para preferencias inmediatas (no para envío de formularios). */
export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export function Switch(props: SwitchProps): JSX.Element;
