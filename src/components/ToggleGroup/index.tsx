import { Button } from '@nextui-org/react';
import { useField } from 'formik';
import React, { ReactNode, createContext, useContext } from 'react';

type ToggleGroupProps = {
  changeState: (value: string | number) => void;
  children: ReactNode;
}

type GroupItemProps = {
  value: string;
  itemType?: "color" | "label";
  label?: string;
  color?: string;
}

const SelectedValue = createContext<any>("");

const Item = (props: GroupItemProps) => {
  const externalState = useContext(SelectedValue);

  if (props.itemType === "color") {
    return (
      <div>
        <Button onClick={() =>
          externalState(props.value)}
        >
          Item Label
        </Button>
      </div>
    )
  }

  return (
    <div></div>
  )
}

function ToggleGroup({ name, ...props }: any) {
  const [field, meta, helpers] = useField(name);

  return (
    <div>
      {/* <SelectedValue.Provider value={externalState}>
        {props.children}
      </SelectedValue.Provider> */}
      <Button onPress={() => helpers.setValue("P")}>Size P</Button>
      <Button onPress={() => helpers.setValue("M")}>Size M</Button>
    </div>
  )
}

ToggleGroup.Item = Item;

export { ToggleGroup }

