import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ExpandableChecklist from './ExpandableChecklist.js';

const ProjectPage = ({navigate}) => {

  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search..."
          placeholderTextColor="#B0B0B0"
        />
        <TouchableOpacity style={styles.iconButton}>
          <Image
            style={{ width: 30, height: 30 }}
            source={require('../assets/searchicon.png')}
          />
        </TouchableOpacity>
      </View>

      {/* Project Section */}
      <View style={styles.projectsContainer}>
        <Text style={styles.sectionTitle}>Checklist</Text>
        
        <View style={styles.projectCards}>
          <View style={styles.projectCard}>
            <Text style={styles.projectTitle}>Ofspace</Text>
            <Text style={styles.projectSubtitle}>Dribbble team</Text>

            <TouchableOpacity style={styles.viewProjectButton}>
              <Text 
                style={styles.buttonText}
                onPress={() => navigation.navigate('ExpandableChecklist')}
              >
                View Checklist
              </Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.projectCard}>
            <Text style={styles.projectTitle}>Online</Text>
            <Text style={styles.projectSubtitle}>Course apps</Text>
            <View style={styles.teamIcons}>
              <Text>👤+8</Text>
            </View>
            <TouchableOpacity style={styles.viewProjectButton}>
              <Text style={styles.buttonText}>View project</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Time Management Section */}
      <View style={styles.timeManagementContainer}>
        <Text style={styles.sectionTitle}>Time Management</Text>
        <View style={styles.dateRow}>
          <Text>Sep 10</Text>
          <Text>Sep 11</Text>
          <Text>Sep 12</Text>
          <Text>Sep 13</Text>
          <Text style={styles.activeDate}>Sep 14</Text>
        </View>
        
        <View style={styles.timeTasks}>
          <Text style={styles.timeLabel}>8:00</Text>
          <View style={styles.task}>
            <Text>Product Design</Text>
            <Text>Create Wireframe</Text>
          </View>
        </View>
      </View>
      
      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Text>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>📆</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Text>➕</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>🗂</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>👤</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingBottom: 80,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  iconButton: {
    padding: 10,
    marginLeft: 8,
  },
  searchBar: {
    flex: 1,
    padding: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
  },
  projectsContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 16,
  },
  projectCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  projectCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    width: '48%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    marginBottom: 16,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  projectSubtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  teamIcons: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  viewProjectButton: {
    backgroundColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
  },
  timeManagementContainer: {
    padding: 16,
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  activeDate: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  timeTasks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeLabel: {
    fontWeight: 'bold',
  },
  task: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    width: '80%',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  addButton: {
    backgroundColor: '#000',
    padding: 16,
    borderRadius: 50,
  },
});

export default ProjectPage;
