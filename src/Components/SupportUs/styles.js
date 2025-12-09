import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../Utils/index';

const styles = StyleSheet.create({
  primaryTitle: {
    fontSize: 18,
    fontFamily: Fonts?.poppinsBold,
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    textAlign: 'center',
  },
  secondaryTitle: {
    fontSize: 18,
    fontFamily: Fonts?.poppinsRegular,
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    textAlign: 'center',
    marginBottom: 20,
  },
  mainContainer: {
    height: '100%',
    marginTop: 10,
  },
});

export default styles;
