"use client";

import { useEffect, useRef, useState } from "react";
import NextImage from "next/image";

interface ChipAssemblyProps {
  imageSrc: string;
  width?: number;
  height?: number;
}

interface Particle {
  startX: number;
  startY: number;

  x: number;
  y: number;

  tx: number;
  ty: number;

  size: number;
  color: string;
}

export default function ChipAssembly({
    return(
        <div
         style={{
          width = 350,
          height = 350,
          background: "red",
         }}
        />
    );
}: ChipAssemblyProps) {
  const [assembled, setAssembled] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = width;
    canvas.height = height;

    const img = new window.Image();

    img.src = imageSrc;

    img.onload = () => {
      const tempCanvas =
        document.createElement("canvas");

      tempCanvas.width = width;
      tempCanvas.height = height;

      const tempCtx =
        tempCanvas.getContext("2d");

      if (!tempCtx) return;

      tempCtx.drawImage(
        img,
        0,
        0,
        width,
        height
      );

      const imageData =
        tempCtx.getImageData(
          0,
          0,
          width,
          height
        );

      const particles: Particle[] = [];

      const gap = 2;

      for (
        let y = 0;
        y < height;
        y += gap
      ) {
        for (
          let x = 0;
          x < width;
          x += gap
        ) {
          const index =
            (y * width + x) * 4;

          const r =
            imageData.data[index];

          const g =
            imageData.data[index + 1];

          const b =
            imageData.data[index + 2];

          const a =
            imageData.data[index + 3];

          if (a > 40) {
            const startX =
              width / 2 +
              (Math.random() - 0.5) *
                1200;

            const startY =
              height / 2 +
              (Math.random() - 0.5) *
                1200;

            particles.push({
              startX,
              startY,

              x: startX,
              y: startY,

              tx: x,
              ty: y,

              size: gap,

              color: `rgba(${r},${g},${b},${a / 255})`,
            });
          }
        }
      }

      const startTime =
        performance.now();

      const duration = 3000;

      const animate = (
        currentTime: number
      ) => {
        if (!mountedRef.current)
          return;

        const progress = Math.min(
          (currentTime -
            startTime) /
            duration,
          1
        );

        const eased =
          1 -
          Math.pow(
            1 - progress,
            3
          );

        ctx.clearRect(
          0,
          0,
          width,
          height
        );

        particles.forEach((p) => {
          p.x =
            p.startX +
            (p.tx - p.startX) *
              eased;

          p.y =
            p.startY +
            (p.ty - p.startY) *
              eased;

          ctx.fillStyle = p.color;

          ctx.fillRect(
            p.x,
            p.y,
            p.size,
            p.size
          );
        });

        if (progress < 1) {
          animationRef.current =
            requestAnimationFrame(
              animate
            );
        } else {
          ctx.clearRect(
            0,
            0,
            width,
            height
          );

          particles.length = 0;

          setTimeout(() => {
            if (
              mountedRef.current
            ) {
              setAssembled(
                true
              );
            }
          }, 50);
        }
      };

      animationRef.current =
        requestAnimationFrame(
          animate
        );
    };

    return () => {
      mountedRef.current =
        false;

      if (
        animationRef.current
      ) {
        cancelAnimationFrame(
          animationRef.current
        );
      }
    };
  }, [imageSrc, width, height]);

  if (assembled) {
    return (
      <NextImage
        src={imageSrc}
        alt="Chip"
        width={width}
        height={height}
        priority
        className="
          rounded-3xl
          object-cover
          shadow-[0_0_80px_rgba(34,211,238,0.5)]
        "
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="
        rounded-3xl
        shadow-[0_0_80px_rgba(34,211,238,0.5)]
      "
    />
  );
}