import {Button, TextInput, View, Modal, Image, StyleSheet} from "react-native";
import {useState} from "react";

const GoalInput = ({onAddGoal, modalIsVisible, endAddGoalHandler}) => {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText)
    };

    const addGoalHandler = () => {
        onAddGoal(enteredGoalText);
        setEnteredGoalText("");
        endAddGoalHandler()
    }

    return (
        <Modal visible={modalIsVisible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image
                    style={styles.image}
                    source={require("../assets/images/goal.png")}
                />
                <TextInput placeholder="Your course goal!"
                           style={styles.textInput}
                           value={enteredGoalText}
                           onChangeText={goalInputHandler}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={endAddGoalHandler} color="#f31282"/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0"/>
                    </View>
                </View>

            </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#311b6b"
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor: "#e4d0ff",
        color: "#120438",
        borderRadius: 6,
        width: "100%",
        padding: 16
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: "row",
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    }
});