/* eslint-disable @typescript-eslint/naming-convention */
import { KonvaEventObject } from "konva/lib/Node";
import { ReactElement } from "react";
import { Group, Rect, Star } from "react-konva";
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
  const handleDragStart = (e: KonvaEventObject<DragEvent>) => {
    onDragStart(e.target.id());
  };

  const handleDragEnd = (e: KonvaEventObject<DragEvent>) => {
    onDragEnd({
      id: e.target.id(),
      type: "dragEnd",
      x: e.target.x(),
      y: e.target.y(),
    });
  };

  return (
    <Group
      draggable
      id={sensor.id}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      x={sensor.x}
      y={sensor.y}
    >
      <Rect fill="gray" height={80} width={20} x={0} y={0} />
      <Rect fill="gray" height={80} width={20} x={60} y={0} />
      <Star
        fill="#89b717"
        innerRadius={20}
        numPoints={5}
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
        x={40}
        y={40}
      />
    </Group>
  );
};
