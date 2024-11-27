import { Text, View } from "react-native"
import { Link } from "expo-router"


const index = () => {
  return (
    <View className="flex-1 items-center justify-center ">
        <Text className="text-red-600 text-2xl">Aora</Text>
        <Link href="/profile" className="text-blue-500 text-xl">Go to Profile</Link>
    </View>
  )
}

export default index
