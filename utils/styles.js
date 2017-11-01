import { StyleSheet, Platform } from 'react-native'
import { white, black, red } from './colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white
  },
  topContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
  },
  btn: {
    borderRadius: Platform.OS === 'ios' ? 6 : 2,
    borderWidth: 1,
    borderColor: white,
    backgroundColor: black,
    paddingTop: 8,
    paddingBottom: 8,
    width: 120,
  },
  btnText: {
    fontSize: 12,
    color: white,
    textAlign: 'center',
  },
  bigText: {
    fontSize: 32,
    color: black,
    textAlign: 'center',
  },
  redText: {
    fontSize: 12,
    color: red,
    textAlign: 'center',
  }


})
