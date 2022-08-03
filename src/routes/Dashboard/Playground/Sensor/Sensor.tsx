/* eslint-disable @typescript-eslint/naming-convention */
import { KonvaEventObject } from "konva/lib/Node";
import { ReactElement } from "react";
import { Star } from "react-konva";
import { SensorState, Transition } from "../Playground.utils";

type Props = {
  onDragEnd: (event: Transition<"dragEnd">) => void;
  onDragStart: (id: string) => void;
  sensor: SensorState;
};

export const Sensor = ({
  sensor,
  onDragStart,
  onDragEnd,
}: Props): ReactElement => {
  // const [state, send] = useActor(sensorRef);
  // const [state, send] = useMachine(starsMachine);
  // .
  // const [stars, setStars] = useState(initialState);

  const handleDragStart = (e: KonvaEventObject<DragEvent>) => {
    onDragStart(e.target.id());
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
  const handleDragEnd = (e: KonvaEventObject<DragEvent>) => {
    onDragEnd({
      id: e.target.id(),
      type: "dragEnd",
      x: e.target.x(),
      y: e.target.y(),
    });
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
    <Star
      draggable
      fill="#89b717"
      id={sensor.id}
      innerRadius={20}
      numPoints={5}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      opacity={0.8}
      outerRadius={40}
      rotation={sensor.rotation}
      scaleX={sensor.isDragging ? 1.2 : 1}
      scaleY={sensor.isDragging ? 1.2 : 1}
      shadowBlur={10}
      shadowColor="black"
      shadowOffsetX={sensor.isDragging ? 10 : 5}
      shadowOffsetY={sensor.isDragging ? 10 : 5}
      shadowOpacity={0.6}
      x={sensor.x}
      y={sensor.y}
    />
  );
};
