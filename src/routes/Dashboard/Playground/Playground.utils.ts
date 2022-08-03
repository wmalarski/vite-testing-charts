/* eslint-disable @typescript-eslint/naming-convention */
import { assign, createMachine, MachineConfig } from "xstate";

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

type StarsMachineSchema = {
  // type: "";
  states: {
    active: {
      // drag: { id: string };
    };
  };
};

type Transitions =
  | {
      type: "dragStart";
      id: string;
    }
  | {
      type: "dragEnd";
      id: string;
      x: number;
      y: number;
    };

type LookUp<U, T extends string> = U extends { type: T } ? U : never;

export type Transition<T extends string> = LookUp<Transitions, T>;

const starsMachineConfig: MachineConfig<
  StarsMachineContext,
  StarsMachineSchema,
  Transitions
> = {
  id: "stars",
  initial: "active",
  context: {
    sensors: [
      {
        id: `${Math.floor(Math.random() * 1e16)}`,
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
        dragStart: {
          actions: assign((state, event) => {
            const sensors = [...state.sensors];
            const index = sensors.findIndex((sensor) => sensor.id === event.id);

            const sensor = { ...sensors[index], isDragging: true };
            sensors[index] = sensor;

            return { sensors };
          }),
        },
        dragEnd: {
          actions: assign((state, event) => {
            const sensors = [...state.sensors];
            const index = sensors.findIndex((sensor) => sensor.id === event.id);

            const sensor = {
              ...sensors[index],
              isDragging: false,
              x: event.x,
              y: event.y,
            };
            sensors[index] = sensor;

            return { sensors };
          }),
        },
      },
    },
  },
};

export const starsMachine = createMachine(starsMachineConfig);
