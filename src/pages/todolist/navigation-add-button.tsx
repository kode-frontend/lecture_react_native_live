import { NavigationProp, useNavigation } from '@react-navigation/native'
import { IconAdd } from '@shared/ui/icons'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { NavigationParamsList } from 'types'

type Props = {
  // onPress: () => void
}

export const NavigationAddButton: React.FC<Props> = ({ }) => {

  const navigation = useNavigation<NavigationProp<NavigationParamsList>>()

  return (
    <TouchableOpacity onPress={() => navigation.navigate('create', { text: '' }) }>
      <IconAdd/>
    </TouchableOpacity>
  )
}
