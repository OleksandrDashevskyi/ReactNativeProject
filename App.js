import {useState} from "react";
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
    const [goalsList, setGoalsList] = useState([]);
    const [modalIsVisible, setModalIsVisible] = useState(false)

    const addGoalHandler = (enteredGoalText) => {
        setGoalsList(currentGoalsList => [...currentGoalsList,
            {text: enteredGoalText, id: Math.random().toString()}
        ]);
    };

    const deleteGoalHandler = (id) => {
        setGoalsList(currentGoalsList => {
            return currentGoalsList.filter((goal) => goal.id !== id)
        })
    };

    const startAddGoalHandler = () => {
        setModalIsVisible(true);
    }

    const endAddGoalHandler = () => {
        setModalIsVisible(false)
    }

    return (
        <>
            <StatusBar style="light"/>
            <View style={styles.appContainer}>
                <Button title="Add New Goal" color="#a065ec" onPress={startAddGoalHandler}/>
                <GoalInput onAddGoal={addGoalHandler} modalIsVisible={modalIsVisible}
                           endAddGoalHandler={endAddGoalHandler}/>
                <View style={styles.goalsContainer}>
                    <FlatList data={goalsList} renderItem={(itemData) => {
                        return (
                            <GoalItem itemData={itemData} onDeleteItem={deleteGoalHandler}/>
                        )
                    }}
                              alwaysBounceVertical={false}
                              keyExtractor={(item) => item.id}
                    />
                </View>
            </View>
        </>
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
