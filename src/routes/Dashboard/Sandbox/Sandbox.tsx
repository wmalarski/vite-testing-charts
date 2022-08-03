import { observer } from "mobx-react-lite";
import { ReactElement, useState } from "react";
import { Layer, Stage, Text } from "react-konva";
import { SandboxStore } from "./Sandbox.utils";
import { Sensor } from "./Sensor/Sensor";

export const Sandbox = observer((): ReactElement => {
  const [store] = useState(() =>
    SandboxStore.create({
      sensors: [{}],
    })
  );

  return (
    <Stage height={window.innerHeight} width={window.innerWidth}>
      <Layer>
        <Text text="Try to drag a star" />
        {store.sensors.map((sensor) => (
          <Sensor key={sensor.id} sensor={sensor} />
        ))}
      </Layer>
    </Stage>
  );
});
