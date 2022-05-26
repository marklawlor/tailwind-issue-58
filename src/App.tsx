import { Text, View } from 'react-native';
import { TailwindProvider } from "tailwindcss-react-native"

export default function App() {
  return (
    <TailwindProvider>
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-red-500">Open up App.tsx to start working on your app!!</Text>
      </View>
    </TailwindProvider>
  );
}
