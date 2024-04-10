import React from 'react';
import {Text, StyleSheet, View, Alert} from 'react-native';
import {Button} from 'react-native-elements';
import {supabase} from '../lib/supabase';

export default function Home() {
  async function signOut() {
    const {error} = await supabase.auth.signOut();
    if (error) Alert.alert(error.message);
  }

  return (
    <View style={styles.container}>
      <Text>This is Home Screen</Text>
      <Button title="Sign out" onPress={() => signOut()} style={styles.mt20} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  mt20: {
    marginTop: 20,
  },
});
