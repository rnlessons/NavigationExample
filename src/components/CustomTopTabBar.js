import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Animated from 'react-native-reanimated';

export default function CustomTobTabBar({
  state,
  descriptors,
  navigation,
  position,
}) {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const label = route.name;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, padding: 30}}>
            <Text
              style={{
                textAlign: 'center',
                padding: 5,
                backgroundColor: 'yellow',
              }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
