# smh-rn-otp-textinput

smh-rn-otp-textinput

## Installation
```sh
# Expo
npx expo install smh-rn-otp-textinput

#React Native
npm install --save smh-rn-otp-textinput
```

## Helper Functions
Clearing and Setting values to component

```js
// using traditional ref
clearText = () => {
    this.otpInput.clear();
}

setText = () => {
    this.otpInput.setValue("1234");
}

render() {
    return (
        <View>
            <OTPTextInput ref={e => (this.otpInput = e)} >
            <Button title="clear" onClick={this.clearText}>
        </View>
    );
}


```


```js
// hooks
import React, { useRef } from 'react';

const ParentComponent = () => {
    let otpInput = useRef(null);

    const clearText = () => {
        otpInput.current.clear();
    }

    const setText = () => {
        otpInput.current.setValue("1234");
    }

    return (
        <View>
            <OTPTextView ref={e => (otpInput = e)} >
            <Button title="clear" onClick={clearText}>
        </View>
    );
}

```

## Example

```js

import React, { useRef, useState } from 'react'
import { OtpTextInput, StyleSheet } from '@/imports';
import { useTheme } from '@/hooks';
import { heightPercent, widthPercent } from '@/helpers/functions/responsive';
import { debugLog } from '@/config/logsConfig';
import {OTPTextView, OTPTextViewType} from 'smh-rn-otp-textinput';

const OtpInput = () => {

  const theme = useTheme();
  const { colors, fontSizes, iconSizes } = theme

  const styles = StyleSheet.create({
    textInputContainer: {
      marginVertical: 15,
      justifyContent:'center',
      padding:widthPercent(0.3)
    },
    roundedTextInput: {
      borderRadius: 10,
      borderWidth: 1,
      width:widthPercent(6),
      height:heightPercent(6),
      margin:widthPercent(0.2)
    },
  })

  const [otpInput, setOtpInput] = useState<string>("");
  const input = useRef<OTPTextViewType>(null);
  const handleCellTextChange = async (text: string, i: number) => {
    debugLog('handleCellTextChange')
  };
  return (
    <OTPTextView
      handleCellTextChange={handleCellTextChange}
      handleTextChange={setOtpInput}
      inputCount={6}
      keyboardType="numeric"
      containerStyle={styles.textInputContainer}
      textInputStyle={styles.roundedTextInput}
      tintColor={colors.text}
    />
  );

}

export default OtpInput

```

And we're done 🎉
## Contributing

Contribution are always welcome, no matter how large or small !

We want this community to be friendly and respectful to each other.Please follow it in all your interactions with the project.

Please feel free to drop me a mail [S MUNI HARISH](mailto:samamuniharish@gmail.com?subject=[GitHub])

## Acknowledgements

Thanks to the authors of these libraries for inspiration

## Note

Inspired by [react-native-otp-textinput](https://github.com/naveenvignesh5/react-native-otp-textinput#readme)

## Sponsor & Support

To keep this library maintained and up-to-date please consider [sponsoring it on GitHub](https://github.com/sponsors/smuniharish). Or if you are looking for a private support or help in customizing the experience, then reach out to me on Linkedin [@smuniharish](https://www.linkedin.com/in/smuniharish).

## License

[MIT](./LICENSE)

---

Made with ❤️
