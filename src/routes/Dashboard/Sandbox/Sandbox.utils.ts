import { types } from "mobx-state-tree";

type EndDragArgs = {
  x: number;
  y: number;
};

export const SensorModel = types
  .model("SensorModel", {
    id: types.optional(types.string, () => `${Math.random() * 1e16}`),
    x: types.optional(types.number, () => Math.random() * window.innerWidth),
    y: types.optional(types.number, () => Math.random() * window.innerWidth),
    isDragging: types.optional(types.boolean, false),
    rotation: types.optional(types.number, () => Math.random() * 180),
  })
  .actions((self) => ({
    startDrag() {
      self.isDragging = true;
    },
    endDrag({ x, y }: EndDragArgs) {
      self.isDragging = false;
      self.x = x;
      self.y = y;
    },
  }));

export const SandboxStore = types.model("SandboxStore", {
  sensors: types.optional(types.array(SensorModel), []),
});
