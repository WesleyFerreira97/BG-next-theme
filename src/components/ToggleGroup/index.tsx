import { Button } from '@nextui-org/react';
import { useField } from 'formik';
import React, { ReactNode, createContext, useContext, useState } from 'react';

type ToggleGroupProps = {
  changeState: (value: string | number) => void;
  children: ReactNode;
}

type ColorProps = {
  selectedColor: string;
  disabledColor: string;
  availableColor: string;
}

type GroupItemProps = {
  value: string;
  itemType?: "color" | "label";
  label?: string;
  available?: boolean;
}

const SelectedValue = createContext<any>("");

const Item = (props: GroupItemProps) => {
  const { helpers, field } = useContext(SelectedValue);
  const [itemState, setItemState] = useState<string>(
    props.available === false ? "#000" : "#fdd242"
  );

  const handleItemState = () => {
    if (props.available === false) {
      // Inactive Item
      return "#BFACE2";
    };

    const currentColorState = props.value === field.value ? "#fdd242" : "#860d0d";

    return currentColorState;
  }

  const handleValue = () => {
    return helpers.setValue(props.value)
  };

  if (props.itemType === "color") {
    return (
      <div>
        <Button
          onPress={() => {
            handleItemState();
            handleValue();
          }}
        >
          dsdf
        </Button>
      </div>
    )
  }

  return (
    <div>
      <Button
        onPress={() => {
          handleItemState();
          handleValue();
        }}
        disabled={props.available === false}
        css={{
          backgroundColor: handleItemState(),
        }}
      >
        {props.label}
      </Button>
    </div>
  )
}

function ToggleGroup({ name, ...props }: any) {
  const [field, meta, helpers] = useField(name);

  return (
    <div>
      <SelectedValue.Provider value={{ helpers, field }}>
        {props.children}
      </SelectedValue.Provider>

    </div>
  )
}

ToggleGroup.Item = Item;

export { ToggleGroup }

