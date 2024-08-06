import { RecursivePartial } from '@tsparticles/engine';
import { IOptions } from '@tsparticles/engine';

const PARTICLE_LIMIT = 500;
const PIXELS_PER_PARTICLE_TARGET = 10_000;

function genParticlesConfig(width: number, height: number, motion: boolean): RecursivePartial<IOptions> {
  const area = width * height;
  const particles = Math.min(PARTICLE_LIMIT, Math.round(area / PIXELS_PER_PARTICLE_TARGET));

  return {
    background: {
      opacity: 0,
      color: {
        value: '#0F172A',
      },
    },
    fpsLimit: 30,
    interactivity: {
      resize: {
        enable: true,
      },
    },
    particles: {
      color: {
        value: '#D1AC00',
      },
      links: {
        color: '#D1AC00',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'out',
        },
        random: false,
        speed: motion ? 0.25 : 0,
        straight: false,
      },
      number: {
        value: particles,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: {
          min: 1,
          max: 5,
        },
      },
    },
    detectRetina: true,
  };
}

export default genParticlesConfig;
