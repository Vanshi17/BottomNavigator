import { StyleSheet } from 'react-native';

export const stylesSheet = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, fontWeight: 'bold' },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  name: { fontSize: 22, fontWeight: 'bold' },
  bio: { fontSize: 16, color: 'gray' },
  containersetting: { flex: 1, justifyContent: 'center', padding: 20 },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
  },
  tabBar: { height: 60 },
  tabBarLabel: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', alignSelf: 'center' },
  tabBarItem: { justifyContent: 'center', alignItems: 'center', paddingTop: 2 },
});
