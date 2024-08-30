import { Button } from '@nextui-org/react';
import { useField } from 'formik';
import React, { createContext, useContext } from 'react';
import { ToggleGroupProps } from './types';
import { Item } from './Item';
import { ErrorMessageWrap } from './styles';
import { FieldHelperProps, FieldInputProps } from 'formik';
import { ItemTypeProps } from './types';

type ToggleContextProps<T> = {
  helpers: FieldHelperProps<T>;
  field: FieldInputProps<T>;
  itemType: ItemTypeProps
}

export const SelectedValue = createContext<ToggleContextProps<any>>({
  helpers: {} as FieldHelperProps<any>,
  field: {} as FieldInputProps<any>,
  itemType: 'label'
});

function useToggleContext() {
  const { helpers, field, itemType } = useContext<ToggleContextProps<any>>(SelectedValue);

  return { helpers, field, itemType }
}

function ToggleGroup({ name, children, itemType }: ToggleGroupProps) {
  const [field, meta, helpers] = useField(name);

  return (
    <div>
      <SelectedValue.Provider value={{ field, helpers, itemType }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: ".5rem",
        }}>
          {children}
        </div>
        {meta.error && meta.touched && (
          <ErrorMessageWrap>
            {meta.error}
          </ErrorMessageWrap>
        )}
      </SelectedValue.Provider>

    </div>
  )
}

ToggleGroup.Item = Item;

export { ToggleGroup, useToggleContext }

