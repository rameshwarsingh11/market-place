import React from "react";
import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";
import { ErrorMessage } from "./ErrorMessage";

function AppFormPicker({
  items,
  name,
  placeholder,
  PickerItemComponent,
  width,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <AppPicker
      items={items}
      onSelectItem={(item) => setFieldValue(name, item)}
      placeholder={placeholder}
      selectedItem={values[name]}
      width={width}
      PickerItemComponent={PickerItemComponent}
    />
  );
}

export default AppFormPicker;
