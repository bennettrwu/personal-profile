import { useEffect, useState } from 'react';

import { Engine, IOptions, RecursivePartial } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useDebouncedCallback } from 'use-debounce';

import ToggleSwitch from '../../components/toggle-switch';
import './background.scss';
import genParticleConfig from './get-particle-config';

export default function Background({ children }: React.PropsWithChildren) {
  const [particleConfig, setParticleConfig] =
    useState<RecursivePartial<IOptions | undefined>>();

  // default to true if undefined
  const [motionEnabled, setMotionEnabled] = useState(
    window.localStorage.getItem('motionEnabled') !== 'false',
  );
  const [particlesEnabled, setParticlesEnabled] = useState(
    window.localStorage.getItem('particlesEnabled') !== 'false',
  );

  // Override state update functions to also save to local storage
  const setMotionEnabledWithSave = (enabled: boolean) => {
    window.localStorage.setItem('motionEnabled', enabled.toString());
    // Particle config needs to be updated when disabling motion
    setParticleConfig(
      genParticleConfig(window.innerWidth, window.innerHeight, enabled),
    );
    setMotionEnabled(enabled);
  };

  const setParticlesEnabledWithSave = (enabled: boolean) => {
    window.localStorage.setItem('particlesEnabled', enabled.toString());
    setParticlesEnabled(enabled);
  };

  // Debounce particle configuration updates
  const updateParticleConfig = useDebouncedCallback(() => {
    const newConfig = genParticleConfig(
      window.innerWidth,
      window.innerHeight,
      motionEnabled,
      particleConfig,
    );
    /* eslint-disable-next-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect --
     * Use effect is only called when component first mounts and state needs to be updated based on external events
     */
    if (newConfig) setParticleConfig(newConfig);
  }, 500);
  useEffect(() => {
    // Update particle config on each resize
    window.addEventListener('resize', updateParticleConfig);

    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).catch((error: unknown) => {
      console.error(error);
    });
    updateParticleConfig();

    return () => {
      window.removeEventListener('resize', updateParticleConfig);
    };
  }, [updateParticleConfig]);

  return (
    <>
      <div id="background-gradient"></div>

      {particlesEnabled && (
        <div className="animate-fade-in-3s">
          <Particles id="tsparticles" options={particleConfig} />
        </div>
      )}

      <div id="background-particle-config-container">
        <p>Particles:</p>
        <ToggleSwitch
          isOn={particlesEnabled}
          onSwitch={setParticlesEnabledWithSave}
        />
        {particlesEnabled && (
          <>
            <p>Motion:</p>
            <ToggleSwitch
              isOn={motionEnabled}
              onSwitch={setMotionEnabledWithSave}
            />
          </>
        )}
      </div>

      <div id="background-content-container">{children}</div>
    </>
  );
}
