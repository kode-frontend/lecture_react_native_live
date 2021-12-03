import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Context } from '@shared/store/store'
import React, { useMemo } from 'react'
import { useContext } from 'react'
import { Text, View, StyleSheet, FlatList, RefreshControl } from 'react-native'
import { NavigationParamsList } from 'types'
import { TodoListItem } from './todolist-item'



type Props = NativeStackScreenProps<NavigationParamsList, 'todolist'>

export const Todolist: React.FC<Props> = ({ navigation, route }) => {

  const { state, dispatch } = useContext(Context)

  return(
    <View style={styles.root}>
      <Text style={styles.header}>Что нужно сделать?</Text>
      <FlatList
        data={state.todos}
        keyExtractor={(item, index) => String(item.id)}
        renderItem={({ item, index }) => {
          return (
            <TodoListItem
              text={item.text}
              isCompleted={item.isCompleted}
              onComplete={() => dispatch({ type: 'TOGGLE_COMPLETED', payload: { id: item.id }} )}
              onDelete={() => dispatch({ type: 'DELETE_TODO', payload: { id: item.id }} )}
            />
          )
        }}
        refreshControl={<RefreshControl
          onRefresh={() => null}
          refreshing={false}
        />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  header: {
    fontFamily: 'SF_PRO_SEMIBOLD_600',
    marginHorizontal: 15,
    marginVertical: 10,
    color: 'rgba(0,0,0, .4)'
  }
})
