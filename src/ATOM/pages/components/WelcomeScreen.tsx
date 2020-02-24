import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {calcHeight, calcWidth} from '../../../Settings/Dimensions';
const WelcomeScreen = () => {
  const source = require('../../../assets/ryuga.png');
  return (
    <View style={styles.Container}>
      <View style={styles.ViewStyle1}>
        <Text style={styles.TextStyle1}>Welcome To WhatsApp</Text>
      </View>
      <View style={styles.ViewStyle2}>
        <Image source={source} style={styles.ImageStyle1} />
      </View>
      <View style={styles.ViewStyle3}>
        <View style={styles.ViewStyle4}>
          <Text style={styles.TextStyle2}>
            Please read our privacy policy."Agree and Continue " to accept the
            Terms of Service.
          </Text>
        </View>
        <View style={styles.ViewStyle5}>
          <TouchableOpacity style={styles.TouchableStyle1}>
            <Text style={styles.TextStyle3}>AGREE AND CONTİNUE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  ViewStyle1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  TextStyle1: {
    fontSize: (calcWidth(3.246) + calcHeight(3.246)) / 2,
    color: '#65a09d',
    fontWeight: 'bold',
  },
  ViewStyle2: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageStyle1: {
    width: (calcWidth(42.198) + calcHeight(42.198)) / 2,
    height: (calcWidth(42.198) + calcHeight(42.198)) / 2,
    borderRadius: (calcWidth(42.198) + calcHeight(42.198)) / 2,
  },
  ViewStyle3: {flex: 2},
  ViewStyle4: {flex: 1, justifyContent: 'flex-end'},
  TextStyle2: {
    textAlign: 'center',
    marginHorizontal: (calcWidth(4.869) + calcHeight(4.869)) / 2,
    color: '#636161',
    fontWeight: '900',
  },
  ViewStyle5: {flex: 1},
  TouchableStyle1: {
    paddingVertical: (calcWidth(1.623) + calcHeight(1.1623)) / 2,
    marginHorizontal: (calcWidth(8.115) + calcHeight(8.115)) / 2,
    marginTop: (calcWidth(1.623) + calcHeight(1.1623)) / 2,
    backgroundColor: '#28D067',
  },
  TextStyle3: {textAlign: 'center', color: '#ffffff', fontWeight: 'bold'},
});
export default WelcomeScreen;
