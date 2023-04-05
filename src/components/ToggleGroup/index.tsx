import { Button } from '@nextui-org/react';
import { useField } from 'formik';
import React, { ReactNode, createContext, useContext, useState } from 'react';

type ToggleGroupProps = {
  name: string;
  itemType?: "color" | "label";
  children: ReactNode;
}

type GroupItemProps = {
  value: string;
  label?: string;
  available?: boolean;
  itemType?: "color" | "label";
  color?: string
}

type StatusColorProps = {
  [key: string]: {
    active: string;
    inactive: string;
  }
}

const SelectedValue = createContext<any>("");

const Item = (props: GroupItemProps) => {
  const { helpers, field, groupProps } = useContext(SelectedValue);
  const { itemType } = groupProps;

  const handleItemState = () => {
    // Inactive Item return default color
    if (props.available === false) return "#BFACE2";

    const colorsByItem: StatusColorProps = {
      color: {
        active: props.color as string,
        inactive: "#fff"
      },
      label: {
        active: "#D22779",
        inactive: "#cecece"
      }
    }

    const currentColorState = props.value === field.value
      ? colorsByItem[itemType].active
      : colorsByItem[itemType].inactive;

    return currentColorState;
  }

  const handleValue = () => {
    return helpers.setValue(props.value)
  };

  if (groupProps.itemType === "color") {
    return (
      <div>
        <Button
          onPress={() => {
            handleItemState();
            handleValue();
          }}
          disabled={props.available === false}
          css={{
            backgroundColor: props.color,
            width: "38px",
            height: "38px",
            minWidth: "30px",
            borderRadius: "50%",
            outline: `2px solid ${handleItemState()}`,
            border: "4px solid #fff",
            padding: "10px"
          }}
        >
          {props.label}
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

function ToggleGroup({ name, children, ...groupProps }: ToggleGroupProps) {
  const [field, meta, helpers] = useField(name);

  return (
    <div>
      <SelectedValue.Provider value={{ helpers, field, groupProps }}>
        <div style={{
          display: "flex",
          gap: ".5rem",
        }}>
          {children}
        </div>
      </SelectedValue.Provider>

    </div>
  )
}

ToggleGroup.Item = Item;

export { ToggleGroup }

