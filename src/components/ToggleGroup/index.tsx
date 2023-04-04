import { Button } from '@nextui-org/react';
import { useField } from 'formik';
import React, { ReactNode, createContext, useContext, useState } from 'react';

type ToggleGroupProps = {
  name: string;
  itemType?: "color" | "label";
  children: ReactNode;
}

type ColorProps = {
  selectedColor: string;
  disabledColor: string;
  availableColor: string;
}

type GroupItemProps = {
  value: string;
  label?: string;
  available?: boolean;
  itemType?: "color" | "label";
}

const SelectedValue = createContext<any>("");

const Item = (props: GroupItemProps) => {
  const { helpers, field } = useContext(SelectedValue);

  const handleItemState = () => {
    if (props.available === false) {
      // Inactive Item
      return "#BFACE2";
    };

    const currentColorState = props.value === field.value ? "#D22779" : "#cecece";

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
          width: "70px",
          height: "35px",
          minWidth: "50px",
          borderRadius: "50px",
        }}
      >
        {props.label}
      </Button>
    </div>
  )
}

function ToggleGroup({ name, ...props }: ToggleGroupProps) {
  const [field, meta, helpers] = useField(name);

  return (
    <div>
      <SelectedValue.Provider value={{ helpers, field, props }}>
        <div style={{
          display: "flex",
          gap: ".5rem",
        }}>
          {props.children}
        </div>
      </SelectedValue.Provider>

    </div>
  )
}

ToggleGroup.Item = Item;

export { ToggleGroup }

