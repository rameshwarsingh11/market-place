import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(1000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});
const categories = [
  { label: "3D-Poster", value: 1, backgroundColor: "red", icon: "artstation" },
  { label: "Toy", value: 2, backgroundColor: "green", icon: "toy-brick" },
  {
    label: "Art Designs",
    value: 3,
    backgroundColor: "blue",
    icon: "material-design",
  },
];

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          maxLength={255}
          name="title"
          placeholder="Title"
        ></AppFormField>
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        ></AppFormField>
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
          PickerItemComponent={CategoryPickerItem}
          width="50%"
          numberOfColumns={3}
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        ></AppFormField>
        <SubmitButton title="Post The Item"></SubmitButton>
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    fontSize: 20,
  },
});

export default ListingEditScreen;
