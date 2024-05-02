import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  area: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
  },
  control: {
    flexDirection: 'row',
    gap: 20,
    margin: 20,
    alignItems: 'center',
  },
  controlText: {
    color: '#fff',
  },
  controlButton: {
    flex: 1,
    height: 100,
    backgroundColor: '#0061ff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  fundoImg: {
    width: '100%',
    height: '100%'
  }
})