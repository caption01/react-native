import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";

import ColorCounter from "../component/colorCounter";

const COLOR_STEP = 20;

const reducer = (state, action) => {
  switch (action.type) {
    case "change_red": {
      return { ...state, red: state.red + action.payload };
    }

    case "change_green": {
      return { ...state, green: state.green + action.payload };
    }

    case "change_blue": {
      return { ...state, blue: state.blue + action.payload };
    }

    default:
      return state;
  }
};

const SquareScreen = () => {
  const [{ red, green, blue }, dispatch] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });

  return (
    <View>
      <Text>SquareScreen</Text>
      <ColorCounter
        color="red"
        onIncrease={() => dispatch({ type: "change_red", payload: COLOR_STEP })}
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * COLOR_STEP })
        }
      />
      <ColorCounter
        color="green"
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_STEP })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * COLOR_STEP })
        }
      />
      <ColorCounter
        color="blue"
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_STEP })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOR_STEP })
        }
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styled = StyleSheet.create({});

export default SquareScreen;
