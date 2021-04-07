export const getLocation = async () => {
  if (Platform.OS === 'android' && !Constants.isDevice) {
    return 'Oops, this will not work on Snack in an Android emulator. Try it on your device!';
  }
  let { status } = await Location.requestPermissionsAsync();
  if (status !== 'granted') {
    return 'Permission to access location was denied';
  }

  let location = await Location.getCurrentPositionAsync({});
  return location
}