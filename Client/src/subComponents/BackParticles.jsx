import React from "react";
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles";

function BackParticles() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {

  };

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}

        options={{
          background: {
            color: {
              value: '##0c192c',
            },
          },
          fps_limit: 120,
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 120,
                duration: 2.5,
              },
            },
          },
          particles: {
            color: {
              value: "#e91e63",
            },
            links: {
              color: "#23c285",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce", //bounce
              },
              random: false,
              speed: 6.5,
              straight: true,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 100,
            },
            opacity: {
              value: 1.5,
            },
            shape: {
              type: "polygon",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </>
  )
}
export default BackParticles