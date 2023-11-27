import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { Modal } from 'react-native-paper'

export default function Loading() {
  return (
    <View style={{
      flex: 1,
    }}>
      <View style={{
                flex: 1,
                flexDirection: 'row',
                opacity: 0.7,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: 0,
                top: 0,
                left: 0,
                right: 0,
                zIndex: 999
            }}>
                      <ActivityIndicator style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row'
                }} size={60} color='black'>
                </ActivityIndicator>
            </View>

    </View>
  )
}
