import { Images } from "@shared/assets";
import React, { useCallback } from "react";
import { Switch, Text, TouchableOpacity, View, Image, Alert } from "react-native";
import { StyleSheet } from "react-native";

type Props = {
  text: string,
  isCompleted: boolean,
  onDelete: () => void,
  onComplete: (value: boolean) => void
}

export const TodoListItem: React.FC<Props> = ({ isCompleted, text, onComplete, onDelete }) => {

  const onDeleteHandler = useCallback(() => {
    Alert.alert(
      'Внимание',
      'Вы уверены?',
      [
        { text: 'Yes', onPress: onDelete },
        { text: 'No' }
      ]
    )
  }, [onDelete])

  return (
    <View style={styles.root}>
      <Switch value={isCompleted} onValueChange={onComplete} />
      <Text
        style={[
          styles.text,
          isCompleted && styles.completedText
        ]}>
        {text}
      </Text>
      <TouchableOpacity onPress={onDeleteHandler} activeOpacity={0.5}>
        <Image
          source={Images.trash}
          style={styles.icon}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center'
  },
  text: {
    marginHorizontal: 10,
    flex: 1
  },
  completedText: {
    textDecorationLine: 'line-through'
  },
  icon: {
    width: 26,
    height: 26
  }
})
