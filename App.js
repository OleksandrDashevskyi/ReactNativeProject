import {useState} from "react";
import {Button, StyleSheet, View, TextInput, FlatList} from 'react-native';
import GoalItem from "./components/GoalItem";

export default function App() {
    const [enteredGoalText, setEnteredGoalText] = useState("")
    const [goalsList, setGoalsList] = useState([]);
    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText)
    };

    const addGoalHandler = () => {
        setGoalsList(currentGoalsList => [...currentGoalsList,
            {text: enteredGoalText, id: Math.random().toString()}
        ]);
        setEnteredGoalText("")
    };

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Your course goal!"
                           style={styles.textInput}
                           value={enteredGoalText}
                           onChangeText={goalInputHandler}/>
                <Button title="Add Goal" onPress={addGoalHandler}/>
            </View>
            <View style={styles.goalsContainer}>
                <FlatList data={goalsList} renderItem={(itemData) => {
                    return (
                        <GoalItem itemData={itemData}/>
                    )
                }}
                          alwaysBounceVertical={false}
                          keyExtractor={(item) => item.id}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc"
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        marginRight: 8,
        padding: 8
    },
    goalsContainer: {
        flex: 5,
    },
});
