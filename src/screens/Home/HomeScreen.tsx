import { Button } from '@components';
import { View, Text } from 'react-native';

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
      // title="Go to Profile"
      // onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
};