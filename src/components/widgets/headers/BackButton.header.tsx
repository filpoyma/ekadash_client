import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Row } from '../../../components/shared/view';
import { HeaderText } from '../../../components/shared/text';
import { SCREEN_PADDINGS } from '../../../constants/screen.constants';
import BackIcon from '../../../assets/icons/back.svg';
import IconButton from '../../shared/buttons/Icon.button';
import { TSvgComponent } from '../../../typedefs/common';

interface IBackButtonHeaderProps {
  onBackButtonPress: () => void;
  title?: string;
  paddings?: boolean;
  RightIcon?: TSvgComponent;
  onRightButtonPress?: () => void;
  canGoBack?: boolean;
}

const BackButtonHeader: React.FC<IBackButtonHeaderProps> = ({
  onBackButtonPress,
  title,
  paddings,
  RightIcon,
  onRightButtonPress,
  canGoBack = true,
}) => {
  return (
    <Row style={[styles.container, paddings && { paddingHorizontal: SCREEN_PADDINGS.horizontal }]}>
      {canGoBack && <IconButton Icon={BackIcon} size={28} onPress={onBackButtonPress} />}
      <View style={[styles.headerText, !RightIcon && { marginRight: 32 }]}>
        {title && <HeaderText size="h2">{title}</HeaderText>}
      </View>
      {RightIcon && <IconButton Icon={RightIcon} size={28} onPress={onRightButtonPress} />}
    </Row>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: 56,
    alignItems: 'center',
  },
  headerText: {
    flex: 1,
  },
});

export default React.memo(BackButtonHeader);
