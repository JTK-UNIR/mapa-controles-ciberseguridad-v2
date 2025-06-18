import React, { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import controls from '../../data/controlsMap';

export default function ControlMapScreen() {
  const [searchText, setSearchText] = useState('');
  const [showPCI, setShowPCI] = useState(true);
  const [showISO, setShowISO] = useState(true);

  const filteredControls = controls
    .filter((item) => item && item.category)
    .filter((item) => {
      const matchesStandard =
        (showPCI && item.pci) || (showISO && item.iso);
      const matchesSearch =
        item.category.toLowerCase().includes(searchText.toLowerCase()) ||
        (item.pci?.toLowerCase().includes(searchText.toLowerCase()) ?? false) ||
        (item.iso?.toLowerCase().includes(searchText.toLowerCase()) ?? false) ||
        (item.description?.toLowerCase().includes(searchText.toLowerCase()) ?? false);
      return matchesStandard && matchesSearch;
    });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>📌 Mapa Técnico de Controles</Text>

      <TextInput
        style={styles.input}
        placeholder="Buscar por categoría, PCI DSS, ISO 27001 o descripción"
        value={searchText}
        onChangeText={setSearchText}
        placeholderTextColor="#999"
      />

      <View style={styles.toggleRow}>
        <Pressable
          style={[styles.toggleButton, showPCI && styles.toggleSelected]}
          onPress={() => setShowPCI(!showPCI)}
        >
          <Text style={styles.toggleText}>PCI DSS</Text>
        </Pressable>

        <Pressable
          style={[styles.toggleButton, showISO && styles.toggleSelected]}
          onPress={() => setShowISO(!showISO)}
        >
          <Text style={styles.toggleText}>ISO 27001</Text>
        </Pressable>
      </View>

      {filteredControls.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.category}>🔹 {item.category}</Text>
          {showISO && item.iso && (
            <Text style={styles.detail}>
              <Text style={styles.label}>ISO 27001:</Text> {item.iso}
            </Text>
          )}
          {showPCI && item.pci && (
            <Text style={styles.detail}>
              <Text style={styles.label}>PCI DSS:</Text> {item.pci}
            </Text>
          )}
          {item.description && (
            <Text style={styles.description}>{item.description}</Text>
          )}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#222',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    fontSize: 14,
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  toggleButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#666',
    backgroundColor: '#eee',
  },
  toggleSelected: {
    backgroundColor: '#4287f5',
    borderColor: '#2b63c9',
  },
  toggleText: {
    color: '#000',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#f7f9fc',
    padding: 14,
    marginBottom: 12,
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  category: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 6,
    color: '#333',
  },
  detail: { marginBottom: 4, color: '#444' },
  label: { fontWeight: '600', color: '#222' },
  description: {
    marginTop: 6,
    fontStyle: 'italic',
    color: '#666',
    fontSize: 13,
  },
});
