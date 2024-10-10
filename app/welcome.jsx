import { StyleSheet, Text, View } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import { hp, wp } from "../helpers/common";
import Button from "../components/Button";
import { theme } from "../constants/theme";
import { useRouter } from "expo-router";
import { Pressable } from "react-native";

const Welcome = () => {
  const router = useRouter();

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Image
          style={styles.welcomeImage}
          resizeMode="contain"
          source={require("../assets/images/welcome.png")}
        />
        <View style={{ gap: 20 }}>
          <Text style={styles.title}>Talk talk</Text>
          <Text style={styles.punchLine}>Talk in any language,</Text>
        </View>

        <View style={styles.footer}>
          <Button
            title="Getting Started"
            buttonStyle={{ marginHorizontal: wp(3) }}
            onPress={() => router.push("SignUp")}
          />
          <View style={styles.bottomTextContainer}>
            <Text style={styles.loginText}>Already have an account?</Text>
            <Pressable onPress={() => router.push('login')}>
              <Text
                style={[
                  styles.loginText,
                  {
                    color: theme.colors.primaryDark,
                    fontWeight: theme.fonts.semibold,
                  },
                ]}
              >
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: wp(4),
  },
  welcomeImage: {
    height: hp(30),
    width: wp(100),
    alignSelf: "center",
  },
  title: {
    fontSize: hp(4),
    textAlign: "center",
    fontWeight: theme.fonts.extraBold,
    color: theme.colors.text,
  },
  punchLine: {
    color: theme.colors.text,
    fontSize: hp(1.7),
    textAlign: "center",
    paddingHorizontal: wp(10),
  },
  footer: {
    gap: 30,
    width: "100%",
  },
  bottomTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  loginText: {
    textAlign: "center",
    color: theme.colors.text,
    fontSize: hp(1.6),
  },
});
