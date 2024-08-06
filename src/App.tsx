import { useEffect, useRef, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useDebouncedCallback } from 'use-debounce';

import { Engine, IOptions, RecursivePartial } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

import genParticlesConfig from './util/genParticlesConfig';

import ToggleSwitch from './components/ToggleSwitch/ToggleSwitch';

import ProfileIntro from './pages/ProfileIntro/ProfileIntro';
import Contact from './pages/Contact/Contact';

import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProfileIntro />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]);

function App() {
  const particlesRef = useRef<HTMLDivElement>(null);
  const [motionEnabled, setMotionEnabled] = useState(false);
  const [particlesEnabled, setParticlesEnabled] = useState(false);
  const [particleConfig, setParticleConfig] = useState<RecursivePartial<IOptions>>({});

  // Debounces particle config update in case of rapid window resize
  const updateParticleConfig = useDebouncedCallback(() => {
    setParticleConfig(genParticlesConfig(window.innerWidth, window.innerHeight, motionEnabled));
  }, 500);

  useEffect(() => {
    // Update particle config on each resize
    window.addEventListener('resize', updateParticleConfig);

    // Initialize particles
    initParticlesEngine(async (engine: Engine) => {
      // Init particle engine
      await loadSlim(engine);

      // Check and load correct configuration
      const motion = window.localStorage.getItem('motionEnabled');
      motion === 'false' ? setMotionEnabled(false) : setMotionEnabled(true);
      const particles = window.localStorage.getItem('particlesEnabled');
      particles === 'false' ? setParticlesEnabled(false) : setParticlesEnabled(true);
      setParticleConfig(genParticlesConfig(window.innerWidth, window.innerHeight, motionEnabled));
    });
  }, [updateParticleConfig, motionEnabled]);

  return (
    <div id='background-container' ref={particlesRef}>
      {/* Background particles */}
      {particlesEnabled && <Particles id='tsparticles' options={particleConfig} />}

      {/* Container for content */}
      <div id='page-container'>
        <div id='content-container'>
          <RouterProvider router={router} />
        </div>
      </div>

      {/* Container for page toggles */}
      <div id='page-config-container'>
        <p>Motion:</p>
        <ToggleSwitch
          isOn={motionEnabled}
          onSwitch={(isOn) => {
            // Toggle motion and save state
            setMotionEnabled(isOn);
            window.localStorage.setItem('motionEnabled', isOn.toString());
          }}
        />
        <p>Particles:</p>
        <ToggleSwitch
          isOn={particlesEnabled}
          onSwitch={(isOn) => {
            // Toggle particles and save state
            setParticlesEnabled(isOn);
            window.localStorage.setItem('particlesEnabled', isOn.toString());
          }}
        />
      </div>
    </div>
  );
}

export default App;
