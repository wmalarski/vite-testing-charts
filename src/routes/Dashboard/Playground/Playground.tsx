/* eslint-disable @typescript-eslint/naming-convention */
import { useMachine } from "@xstate/react";
import { KonvaEventObject } from "konva/lib/Node";
import { ReactElement } from "react";
import { Layer, Stage, Text } from "react-konva";
import { starsMachine } from "./Playground.utils";
import { Sensor } from "./Sensor/Sensor";

export const Playground = (): ReactElement => {
  const [state, send] = useMachine(starsMachine);
  // .
  // const [stars, setStars] = useState(initialState);

  const handleDragStart = (e: KonvaEventObject<DragEvent>) => {
    console.log(e.target.id());

    // send("");

    // const id = e.target.id();
    // setStars(
    //   stars.map((star) => {
    //     return {
    //       ...star,
    //       isDragging: star.id === id,
    //     };
    //   })
    // );
  };
  const handleDragEnd = () => {
    // setStars(
    //   stars.map((star) => {
    //     return {
    //       ...star,
    //       isDragging: false,
    //     };
    //   })
    // );
  };

  return (
    <Stage height={window.innerHeight} width={window.innerWidth}>
      <Layer>
        <Text text="Try to drag a star" />
        {state.context.sensors.map((sensor) => (
          <Sensor key={sensor.id} sensor={sensor} />
        ))}
      </Layer>
    </Stage>
  );
};
