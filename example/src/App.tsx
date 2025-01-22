import { StyleSheet } from 'react-native';
import { useState } from 'react'
import {OTPTextView} from 'smh-rn-otp-textinput';

export default function App() {
  const styles = StyleSheet.create({
    textInputContainer: {
      marginVertical: 30,
      justifyContent:'center',
      padding:10
    },
    roundedTextInput: {
      borderRadius: 10,
      borderWidth: 1,
      width:50,
      height:50,
      margin:6
    },
  })
  const [otpInput, setOtpInput] = useState<string>("");
  // const input = useRef<OTPTextViewType>(null);
  const handleCellTextChange = async (text: string, i: number) => {
    console.log('handleCellTextChange',text,i)
    console.log(otpInput)
  };
  return (
    <OTPTextView
      handleCellTextChange={handleCellTextChange}
      handleTextChange={setOtpInput}
      inputCount={4}
      keyboardType="numeric"
      containerStyle={styles.textInputContainer}
      textInputStyle={styles.roundedTextInput}
      tintColor={"black"}
    />
  );
}
