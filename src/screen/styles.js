import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  logo: {
    height: 45,
    width: 190,
    marginTop: '25%',
    alignSelf: 'center',
  },
  textcreate: {
    fontSize: 18,
    color: '#5B5B5B',
    marginTop: 25,
    alignSelf: 'center',
    fontWeight: '400',
    fontFamily: 'Nunito',
    marginBottom: 16,
  },
  forgotpassword: {
    alignSelf: 'center',
    fontSize: 14,
    color: '#2E3283',
    marginTop: 17,
  },
  loginwithtext: {
    alignSelf: 'center',
    fontSize: 14,
    color: '#2E3283',
    marginTop: -10,
    marginHorizontal: 20,
  },
  loginwithline: {
    height: 1,
    backgroundColor: '#959595',
    width: 100,
  },

  loginwith: {
    flexDirection: 'row',
    marginTop: 20,
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  textinput: {
    height: 50,
    width: 300,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    borderRadius: 5,
    color: '#959595',
    marginTop: 25,
  },
  eyespassword: {
    alignSelf: 'center',
    right: 12,
    position: 'absolute',
    height: 15,
    widt: 15,
  },
  socialmediaicon: {
    width: 50,
    height: 50,
    marginHorizontal: 25,
  },
  margin: {
    marginTop: 16,
  },
  buttoncreate: {
    height: 50,
    width: 300,
    backgroundColor: '#2E3283',
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 25,
    justifyContent: 'center',
  },
  textbutton: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#FFFFFF',
    height: 40,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    shadowRadius: 50,
    borderColor: 'black',
    borderRadius: 3,
    shadowOffset: 40,
    shadowOpacity: 0.7,
    elevation: 55,
    shadowColor: 'black',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  footertext: {
    fontSize: 14,
    alignSelf: 'center',
    color: '#5B5B5B',
  },
});

export default styles;