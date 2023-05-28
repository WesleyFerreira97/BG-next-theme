import { Button } from '@nextui-org/react';
import { useField } from 'formik';
import React, { createContext } from 'react';
import { ToggleGroupProps } from './types';
import { Item } from './Item';
import { ErrorMessageWrap } from './styles';

export const SelectedValue = createContext<unknown>("");

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

export { ToggleGroup }

