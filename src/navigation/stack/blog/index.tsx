import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BlogMainScreen from "../../../screens/blog";
import BlogDetailScreen from "../../../screens/blog/BlogDetailScreen";



const BlogStackScreen = createNativeStackNavigator();


const BlogStack = () => {
    return (
        <BlogStackScreen.Navigator>
            <BlogStackScreen.Screen name="BlogMain" component={BlogMainScreen } />
            <BlogStackScreen.Screen name="BlogDetail" component={BlogDetailScreen} />
        </BlogStackScreen.Navigator>
    )
}

export default BlogStack