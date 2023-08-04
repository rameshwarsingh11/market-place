import React, { useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native";
import * as ImagePicker from "expo-image-picker";

function ImageInput({ key, imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermission();
  });

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert("Please enable permission to access your media library");
    }
  };
  const handlePress = () => {
    if (!imageUri) {
      selectImage();
    }
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.7,
      });
      if (!result.canceled) {
        onChangeImage(result.imageUri);
      } else {
        Alert.alert(
          "Delete",
          "Do you want to delete this image",
          {
            text: "Yes",
            onPress: () => {
              onChangeImage(null);
            },
          },
          {
            text: "No",
          }
        );
      }
    } catch (error) {
      console.log("There was an error reading the Image", error);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            color={colors.medium}
            name="camera"
            size={40}
          ></MaterialCommunityIcons>
        )}
        {imageUri && (
          <Image source={{ uri: imageUri }} style={styles.image}></Image>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
export default ImageInput;
