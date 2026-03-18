import React from 'react';
import Interface from './src/view/Interface';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Interface />;
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
