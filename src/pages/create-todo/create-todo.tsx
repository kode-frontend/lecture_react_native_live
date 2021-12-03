import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Context } from '@shared/store/store'
import React, { useMemo } from 'react'
import { useContext } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { Text, View, StyleSheet, Button, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import { NavigationParamsList } from 'types'

type Props = NativeStackScreenProps<NavigationParamsList, 'create'>

export const CreateTodo: React.FC<Props> = ({ navigation }) => {

  const [value, setValue] = useState('')
  const { dispatch } = useContext(Context)

  const onCreateHandler = useCallback(() => {
    dispatch({ type: "ADD_TODO", payload: { text: value }})
    navigation.goBack()
  }, [value])

  return(
    <KeyboardAvoidingView style={styles.root} behavior="padding" enabled={Platform.OS === 'ios'}>
      <Text>{'Create screen'}</Text>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={styles.input}
        multiline
      />
      <Button
        title="Create"
        onPress={onCreateHandler}
      />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 8
  }
})
