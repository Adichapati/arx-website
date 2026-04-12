import type { CSSProperties } from "react";

type SpriteName = "pickaxe" | "torch" | "chest" | "map" | "shield" | "spark";
type SpriteTone = "accent" | "emerald" | "muted";

const toneColor: Record<SpriteTone, string> = {
  accent: "var(--accent)",
  emerald: "var(--emerald)",
  muted: "var(--muted)",
};

const glyphs: Record<SpriteName, string[][]> = {
  pickaxe: [
    [".", ".", "#", "#", ".", ".", ".", "."],
    [".", "#", "#", "#", "#", ".", ".", "."],
    ["#", "#", ".", "#", "#", ".", ".", "."],
    [".", ".", ".", "#", ".", "#", ".", "."],
    [".", ".", ".", "#", ".", "#", ".", "."],
    [".", ".", ".", "#", ".", "#", ".", "."],
    [".", ".", ".", ".", "#", ".", ".", "."],
    [".", ".", ".", ".", "#", ".", ".", "."],
  ],
  torch: [
    [".", ".", ".", "#", ".", ".", ".", "."],
    [".", ".", "#", "#", "#", ".", ".", "."],
    [".", ".", ".", "#", ".", ".", ".", "."],
    [".", ".", ".", "#", ".", ".", ".", "."],
    [".", ".", ".", "#", ".", ".", ".", "."],
    [".", ".", ".", "#", ".", ".", ".", "."],
    [".", ".", ".", "#", ".", ".", ".", "."],
    [".", ".", "#", "#", "#", ".", ".", "."],
  ],
  chest: [
    [".", ".", "#", "#", "#", "#", ".", "."],
    [".", "#", "#", "#", "#", "#", "#", "."],
    ["#", "#", ".", ".", ".", ".", "#", "#"],
    ["#", "#", "#", "#", "#", "#", "#", "#"],
    ["#", "#", "#", ".", ".", "#", "#", "#"],
    ["#", "#", "#", "#", "#", "#", "#", "#"],
    [".", "#", "#", "#", "#", "#", "#", "."],
    [".", ".", "#", "#", "#", "#", ".", "."],
  ],
  map: [
    [".", "#", "#", "#", "#", "#", ".", "."],
    ["#", ".", ".", "#", ".", ".", "#", "."],
    ["#", ".", "#", "#", ".", "#", "#", "."],
    ["#", ".", ".", "#", ".", ".", "#", "."],
    ["#", "#", "#", "#", "#", "#", "#", "."],
    ["#", ".", ".", ".", ".", ".", "#", "."],
    ["#", ".", "#", "#", "#", ".", "#", "."],
    [".", "#", "#", "#", "#", "#", ".", "."],
  ],
  shield: [
    [".", ".", "#", "#", "#", "#", ".", "."],
    [".", "#", "#", "#", "#", "#", "#", "."],
    ["#", "#", ".", "#", "#", ".", "#", "#"],
    ["#", "#", "#", "#", "#", "#", "#", "#"],
    [".", "#", "#", "#", "#", "#", "#", "."],
    [".", ".", "#", "#", "#", "#", ".", "."],
    [".", ".", ".", "#", "#", ".", ".", "."],
    [".", ".", ".", ".", "#", ".", ".", "."],
  ],
  spark: [
    [".", ".", ".", "#", ".", ".", ".", "."],
    [".", ".", "#", ".", "#", ".", ".", "."],
    [".", "#", ".", "#", ".", "#", ".", "."],
    ["#", ".", "#", "#", "#", ".", "#", "."],
    [".", "#", ".", "#", ".", "#", ".", "."],
    [".", ".", "#", ".", "#", ".", ".", "."],
    [".", ".", ".", "#", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
  ],
};

export function SpriteGlyph({
  name,
  size = 16,
  tone = "accent",
  className,
}: {
  name: SpriteName;
  size?: number;
  tone?: SpriteTone;
  className?: string;
}) {
  const matrix = glyphs[name];
  const rows = matrix.length;
  const cols = matrix[0].length;
  const pixel = Math.max(1, Math.floor(size / cols));
  const width = cols * pixel;
  const height = rows * pixel;

  const dots: string[] = [];
  for (let y = 0; y < rows; y += 1) {
    for (let x = 0; x < cols; x += 1) {
      if (matrix[y][x] === "#") {
        dots.push(`${x * pixel}px ${y * pixel}px 0 0 ${toneColor[tone]}`);
      }
    }
  }

  const style: CSSProperties = {
    width,
    height,
    position: "relative",
    imageRendering: "pixelated",
  };

  const pxStyle: CSSProperties = {
    width: pixel,
    height: pixel,
    position: "absolute",
    top: 0,
    left: 0,
    boxShadow: dots.join(","),
    background: "transparent",
  };

  return (
    <span className={className} style={style} aria-hidden="true">
      <span style={pxStyle} />
    </span>
  );
}
