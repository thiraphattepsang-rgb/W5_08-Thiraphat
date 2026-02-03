import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons"
import { blue } from "react-native-reanimated/lib/typescript/Colors";

export default function Layout(){
    return(
        <Tabs>
            <Tabs.Screen
            name="index"
            options={{
                title:"บันทึกข้อมูล",
                tabBarIcon: () => (
                    <Ionicons name="home" size={20} color="red" />
                )
            }}
            />
        </Tabs>
    )
}