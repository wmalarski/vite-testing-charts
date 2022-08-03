/* eslint-disable @typescript-eslint/naming-convention */
import { useMachine } from "@xstate/react";
import { ReactElement } from "react";
import { Layer, Stage, Text } from "react-konva";
import { starsMachine, Transition } from "./Playground.utils";
import { Sensor } from "./Sensor/Sensor";

export const Playground = (): ReactElement => {
  const [state, send] = useMachine(starsMachine);
  // .
  // const [stars, setStars] = useState(initialState);

  const handleDragStart = (id: string) => {
    send({ type: "dragStart", id });

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
  const handleDragEnd = (transition: Transition<"dragEnd">) => {
    send(transition);
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
          <Sensor
            key={sensor.id}
            onDragEnd={handleDragEnd}
            onDragStart={handleDragStart}
            sensor={sensor}
          />
        ))}
      </Layer>
    </Stage>
  );
};
