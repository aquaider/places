import { StyleSheet  } from 'react-native';

// import { PRIMARY_COLOR } from '../../theme/colors';
import * as colors from '../../theme/colors';

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: colors.PRIMARY_COLOR,
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  disabled: {
    backgroundColor: 'gray'
  },
  indicator: {
    paddingHorizontal: 8,
  },
  loading: {
    opacity: 0.6
  }
});

export default styles;