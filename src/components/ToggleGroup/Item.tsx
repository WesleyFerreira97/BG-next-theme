import { useContext } from "react";
import { GroupItemProps, StatusColorProps } from "./types";
import { SelectedValue, useToggleContext } from ".";
import { ColorButtonWrap, SizeButtonWrap } from "./styles";
import { Button } from "@nextui-org/react";

export const Item = (props: GroupItemProps) => {
    const { helpers, field, itemType } = useToggleContext();

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

    if (itemType === "color") {
        return (
            <ColorButtonWrap>
                <Button
                    onPress={() => {
                        handleItemState();
                        handleValue();
                    }}
                    disabled={props.available === false}
                    className='colorButton'
                    css={{
                        backgroundColor: props.color,
                        outline: `2px solid ${handleItemState()}`,
                    }}
                >
                    {props.label}
                </Button>
            </ColorButtonWrap>
        )
    }

    return (
        <SizeButtonWrap>
            <Button
                onPress={() => {
                    handleItemState();
                    handleValue();
                }}
                disabled={props.available === false}
                className='sizeButton'
                css={{
                    backgroundColor: handleItemState(),
                }}
            >
                {props.label}
            </Button>

        </SizeButtonWrap>
    )
}