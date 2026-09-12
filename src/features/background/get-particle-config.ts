import { RecursivePartial } from '@tsparticles/engine';
import { IOptions } from '@tsparticles/engine';

import colors from '../../style/_colors.module.scss';

const PARTICLE_LIMIT = 500;
const PIXELS_PER_PARTICLE_TARGET = 10_000;
const PARTICLE_REFRESH_THRESHOLD = 25;

export default function genParticleConfig(
  width: number,
  height: number,
  motion: boolean,
  prevConfig?: RecursivePartial<IOptions>,
): RecursivePartial<IOptions> | undefined {
  const area = width * height;
  const particles = Math.min(
    PARTICLE_LIMIT,
    Math.round(area / PIXELS_PER_PARTICLE_TARGET),
  );

  // Don't refresh background unless change is significant
  if (prevConfig?.particles?.number?.value) {
    if (
      Math.abs(particles - prevConfig.particles.number.value) <
      PARTICLE_REFRESH_THRESHOLD
    )
      return;
  }

  return {
    background: { opacity: 0 },
    fpsLimit: 30,
    // HDR is on by default since v4 and renders colors in display-p3 on
    // wide-gamut screens, which shifts them away from the sRGB theme colors
    hdr: false,
    interactivity: { resize: { enable: true } },
    particles: {
      // v4 moved particle color/fill under `paint`; `particles.color` is ignored
      paint: { color: { value: colors.accent500 } },
      links: {
        color: colors.accent500,
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: { default: 'out' },
        random: false,
        speed: motion ? 0.25 : 0,
        straight: false,
      },
      number: { value: particles },
      opacity: { value: 0.5 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  };
}
