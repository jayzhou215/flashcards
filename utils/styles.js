import { StyleSheet, Platform } from 'react-native'
import { white, black, red, gray } from './colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
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
  },
  input: {
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    alignSelf: 'stretch',
    borderRadius: Platform.OS === 'ios' ? 6 : 2,
    borderWidth: 1,
    borderColor: black,
    marginBottom: 40,
    paddingLeft: 4,
  },
  header: {
    fontSize: 20,
    color: black,
    textAlign: 'center',
  },
  subHeader: {
    marginTop: 4,
    fontSize: 14,
    color: gray,
    textAlign: 'center',
  },


})
