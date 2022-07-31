/* eslint-disable @typescript-eslint/naming-convention */
import { createMachine } from "xstate";

// const createStarMachine = () => {
//   return createMachine({
//     id: "star",
//     initial: "waiting",
//     context: {
//       id: `${Math.floor(Math.random() * 1e20)}`,
//       x: Math.random() * window.innerWidth,
//       y: Math.random() * window.innerHeight,
//       rotation: Math.random() * 180,
//       isDragging: false,
//     },
//     states: {
//       waiting: {
//         on: {
//           DRAG_STARTED: { target: "dragging" },
//         },
//       },
//       dragging: {
//         on: {
//           DRAG_ENDED: { target: "waiting" },
//         },
//       },
//     },
//   });
// };

export type SensorState = {
  id: string;
  x: number;
  y: number;
  rotation: number;
  isDragging: boolean;
};

type StarsMachineContext = {
  sensors: SensorState[];
};

export const starsMachine = createMachine<StarsMachineContext>({
  id: "stars",
  initial: "active",
  context: {
    sensors: [
      {
        id: `${Math.floor(Math.random() * 1e20)}`,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        rotation: Math.random() * 180,
        isDragging: false,
      },
    ],
  },
  states: {
    active: {
      on: {
        drag: {
          actions: [
            (state, event, meta) => {
              console.log({ state, event, meta });
              //
            },
          ],
        },
      },
    },
  },
});
