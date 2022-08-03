import { KonvaEventObject } from "konva/lib/Node";
import { observer } from "mobx-react-lite";
import { Instance } from "mobx-state-tree";
import { ReactElement } from "react";
import { Group, Rect, Star } from "react-konva";
import { SensorModel } from "../Sandbox.utils";

type Props = {
  sensor: Instance<typeof SensorModel>;
};

export const Sensor = observer(({ sensor }: Props): ReactElement => {
  const handleDragStart = () => {
    sensor.startDrag();
  };

  const handleDragEnd = (e: KonvaEventObject<DragEvent>) => {
    sensor.endDrag({ x: e.target.x(), y: e.target.y() });
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
});
