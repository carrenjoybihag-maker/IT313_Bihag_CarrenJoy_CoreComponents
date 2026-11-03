
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  StatusBar,
} from "react-native";

import StudentCard from "./components/StudentCard";

export default function App() {
  // Search input state
  const [search, setSearch] = useState("");

  // Student information
  const [students, setStudents] = useState([
    {
      id: "s1",
      name: "Ana Cruz",
      year: "3rd Year",
      flagged: true,
    },
    {
      id: "s2",
      name: "Bea Santos",
      year: "2nd Year",
      flagged: false,
    },
    {
      id: "s3",
      name: "Cid Ramos",
      year: "4th Year",
      flagged: false,
    },
    {
      id: "s4",
      name: "Dex Alonzo",
      year: "1st Year",
      flagged: false,
    },
    {
      id: "s5",
      name: "Eli Tan",
      year: "3rd Year",
      flagged: false,
    },
  ]);

  // Toggle student flag
  const toggleFlag = (id) => {
    setStudents((previousStudents) =>
      previousStudents.map((student) =>
        student.id === id
          ? {
              ...student,
              flagged: !student.flagged,
            }
          : student
      )
    );
  };

  // Filter students by name
  const filteredStudents = students.filter((student) =>
    student.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#211C52"
      />

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>
          Student Directory
        </Text>

        <Text style={styles.subtitle}>
          5 students this term
        </Text>
      </View>

      {/* MAIN CONTENT */}
      <View style={styles.content}>

        {/* SEARCH BOX */}
        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>
            ⌕
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Search students..."
            placeholderTextColor="#81799F"
            value={search}
            onChangeText={setSearch}
          />
        </View>

        {/* STUDENT LIST */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.studentList}
        >
          {filteredStudents.map((student) => (
            <StudentCard
              key={student.id}
              id={student.id}
              name={student.name}
              year={student.year}
              flagged={student.flagged}
              onToggleFlag={() =>
                toggleFlag(student.id)
              }
            />
          ))}

          {/* NO RESULTS */}
          {filteredStudents.length === 0 && (
            <Text style={styles.noResults}>
              No students found.
            </Text>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

// STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  header: {
    backgroundColor: "#211C52",
    paddingHorizontal: 22,
    paddingTop: 22,
    paddingBottom: 22,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#C7C2E1",
    fontSize: 15,
    marginTop: 5,
  },

  content: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    height: 58,
    backgroundColor: "#F1EFF9",
    borderWidth: 1,
    borderColor: "#E0DDED",
    borderRadius: 17,
    marginHorizontal: 20,
    marginTop: 18,
    marginBottom: 12,
    paddingHorizontal: 16,
  },

  searchIcon: {
    fontSize: 27,
    color: "#81799F",
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: "#25243A",
  },

  studentList: {
    paddingTop: 2,
    paddingBottom: 25,
  },

  noResults: {
    textAlign: "center",
    color: "#81799F",
    fontSize: 16,
    marginTop: 30,
  },
});
