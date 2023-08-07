import React from "react";
import { useFormikContext } from "formik";
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUrils = values[name];
  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUrils, uri]);
  };
  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUrils.filter((imageUri) => imageUri != uri)
    );
  };
  return (
    <>
      <ImageInputList
        imageUris={imageUrils}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      ></ImageInputList>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
