// styles.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Global & Theme
  page: {
    flex: 1,
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontFamily: 'sans-serif',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 20,
  },
  
  // Navbar
  navbar: {
    backgroundColor: '#b30000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    paddingTop: 40, // for mobile status bar safe area
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
    backgroundColor: 'black',
  },
  navLinks: {
    flexDirection: 'row',
    gap: 15,
  },
  navText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },

  // Hero
  hero: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: '900',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },

  // Search
  searchSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  searchInput: {
    backgroundColor: 'white',
    width: '80%',
    padding: 10,
    borderRadius: 15,
    color: 'black',
    marginTop: 10,
  },

  // Categories & Products
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 15,
    padding: 10,
  },
  card: {
    width: '45%',
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  cardImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  cardTitle: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  price: {
    color: 'white',
    marginBottom: 10,
  },

  // Support Page
  supportContainer: {
    padding: 30,
    alignItems: 'center',
  },
  supportText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 15,
  },
  // Add these to your existing styles.ts object
  formContainer: {
    padding: 20,
    marginTop: 20,
  },
  label: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'white',
    color: 'black',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
});