import { Button } from '@nextui-org/react';
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

function ToggleGroup(props: ToggleGroupProps) {
  const { changeState: externalState } = props;

  return (
    <div>
      <SelectedValue.Provider value={externalState}>
        {props.children}
      </SelectedValue.Provider>
    </div>
  )
}

ToggleGroup.Item = Item;

export { ToggleGroup }

