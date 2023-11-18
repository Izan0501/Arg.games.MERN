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
              value: '#000', //*0c192c
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
              value: ["#e91e63", "#18fff3", "#1f2ce4" ],
            },
            links: {
              color: "random",
              blink: false,
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
              triangles: {
                enable:false,
                opacity: 0.05
              }
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
            modes: {
              grab : {
                distance: 400,
                links: {
                  opacity: 1
                }
              }
            },
            connect: {
              radius: 1000
            },
            bubble: {
              distance:400,
              size:40,
              duration: 2,
              opacity: 0.8
            },
            repulse: {
              distance: 50
            },
            push: {
              quantity: 4
            },
            remove: {
              quantity: 2
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 85,
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