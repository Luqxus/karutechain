import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Platform, TouchableOpacity, TextInput, FlatList, Button } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function MobileClinicScreen() {
  // Hardcoded date for next clinic visit; in a real app, you could fetch this from an API
  const [nextVisitDate, setNextVisitDate] = useState('October 30, 2024');
  const [timeSlots, setTimeSlots] = useState(['9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM']);
  const [selectedTime, setSelectedTime] = useState(null);
  const [serviceType, setServiceType] = useState('');
  const [notes, setNotes] = useState('');

  const handleConfirmBooking = () => {
    alert(`Booking confirmed for ${nextVisitDate}`);
  };

  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>Mobile Clinic Booking</ThemedText>
      
      {/* Display Next Available Date */}
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Next Mobile Clinic Visit:</Text>
        <Text style={styles.infoText}>{nextVisitDate}</Text>
      </View>

      {/* Time Slots */}
      {/* <Text style={styles.sectionTitle}>Select Time:</Text>
      <FlatList
        data={timeSlots}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.timeSlot, selectedTime === item && styles.selectedTimeSlot]}
            onPress={() => setSelectedTime(item)}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
      /> */}

      {/* Service Type Dropdown */}
      <Text style={styles.sectionTitle}>Service Type:</Text>
      <View style={styles.dropdown}>
        <Picker
          selectedValue={serviceType}
          onValueChange={(itemValue) => setServiceType(itemValue)}
        >
          
          <Picker.Item label="General Checkup" value="checkup" />
          <Picker.Item label="Vaccination" value="vaccination" />
          <Picker.Item label="Health Screening" value="screening" />
          {/* Add more options as needed */}
        </Picker>
      </View>

      {/* Additional Notes */}
      <Text style={styles.sectionTitle}>Additional Notes:</Text>
      <TextInput
        placeholder="Any specific requirements?"
        value={notes}
        onChangeText={setNotes}
        style={[styles.input, styles.notesInput]}
        multiline
      />

      {/* Confirm Booking Button */}
      <Button
        title="Confirm Booking"
        onPress={handleConfirmBooking}
        disabled={!serviceType}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  infoContainer: {
    marginVertical: 10,
    padding: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 16,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  timeSlot: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    margin: 5,
    borderRadius: 5,
  },
  selectedTimeSlot: {
    backgroundColor: '#5cb85c',
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 5,
    marginTop: 10,
  },
  notesInput: {
    height: 80,
  },
});
