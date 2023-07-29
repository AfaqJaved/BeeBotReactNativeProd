import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Animated,
} from 'react-native';
import {isPortrait, useResponsiveHeight} from '../utils/Utils';

export interface LanguageDialogProps {
  visible: boolean;
  onClose: () => void;
  children?: any;
}

export const LanguageDialog = ({visible, onClose}: LanguageDialogProps) => {
  const [modalVisible, setModalVisible] = useState(visible);
  const translateY = useRef(new Animated.Value(0)).current;

  const showAnimation = () => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const hideAnimation = () => {
    Animated.timing(translateY, {
      toValue: 300,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false);
      translateY.setValue(0);
    });
  };

  // Listen for changes in visibility prop to show/hide the dialog with animation
  React.useEffect(() => {
    if (visible) {
      setModalVisible(true);
      showAnimation();
    } else {
      hideAnimation();
    }
  }, [visible]);

  return (
    <Modal visible={modalVisible} transparent={true} onRequestClose={onClose}>
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          justifyContent: 'flex-end',
        }}
        activeOpacity={1}>
        <Animated.View
          style={[
            {
              backgroundColor: 'white',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              padding: 20,
              minHeight: isPortrait() ? useResponsiveHeight(60) : useResponsiveHeight(90),
              alignItems: 'center',
            },
            {transform: [{translateY}]},
          ]}>
          <Text style={styles.modalText}>
            This is a bottom animation dialog!
          </Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  dialogContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    minHeight: 200,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  openButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 4,
    marginBottom: 20,
  },
  openButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 4,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
