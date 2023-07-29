import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  getLocalFromList,
  isPortrait,
  useResponsiveFontSize,
  useResponsiveHeight,
  useResponsiveWidth,
} from '../utils/Utils';
import {CONSTANTS} from '../constants/Contants';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {t} from 'i18next';
import i18n from '../../translation';
import {Image} from 'react-native-svg';
import React from 'react';

export interface LangProps {
  visible: boolean;
  onClose: () => void;
  children?: any;
}

export interface Language {
  id: string;
  title: string;
}

const data: Language[] = [
  {
    id: '1',
    title: 'English (EN)',
  },
  {
    id: '2',
    title: 'Russian (RU)',
  },
];

export const LangDialog = ({visible, onClose}: LangProps) => {
  const [ignored, forceUpdate] = React.useReducer(x => x + 1, 0);

  React.useEffect(() => {}, []);

  return visible ? (
    <View
      style={{
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 1,
        position: 'absolute',
        zIndex: 1000,
        elevation: 5,
        bottom: 0,
        left: useResponsiveWidth(2.5),
        right: useResponsiveWidth(2.5),
        width: useResponsiveWidth(95),
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 16,
        backgroundColor: CONSTANTS.COLORS.WHITE,
        height: isPortrait()
          ? useResponsiveHeight(70)
          : useResponsiveHeight(90),
      }}>
      <Text style={{fontSize: useResponsiveFontSize(3), color: 'black'}}>
        {t('select_language')}
      </Text>
      <FlatList
        style={{marginTop: useResponsiveHeight(5)}}
        data={data}
        renderItem={({item}) => {
          console.log(item);
          return (
            <TouchableOpacity
              onPress={() => {
                i18n.changeLanguage(getLocalFromList(item.title));
                forceUpdate();
              }}>
              <View style={styles.item}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity
        onPress={onClose}
        style={{
          justifyContent: 'center',
          borderRadius: 20,
          alignItems: 'center',
          padding: 10,
          backgroundColor: CONSTANTS.COLORS.RED,
          width: useResponsiveWidth(50),
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
        <Text
          style={{
            fontSize: useResponsiveFontSize(2),
            color: CONSTANTS.COLORS.WHITE,
          }}>
          {t('close')}
        </Text>
      </TouchableOpacity>
    </View>
  ) : (
    <View style={{display: 'none'}}></View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: CONSTANTS.COLORS.YELLOW,
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
    color: 'white',
  },
});
