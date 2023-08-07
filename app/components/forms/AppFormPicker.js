import React from "react";
import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";

function AppFormPicker({
  items,
  name,
  placeholder,
  PickerItemComponent,
  width,
  numberOfColumns,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
        PickerItemComponent={PickerItemComponent}
        numberOfColumns={numberOfColumns}
      />
    </>
  );
}

export default AppFormPicker;
