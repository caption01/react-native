### React Navigator Food App.

#### 1. first setup navigator with "createStackNavigator & createAppContainer"

```
const navigator = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    <!-- init first screen -->
    initialRouteName: "Search",
    <!-- set title in navigator bar -->
    defaultNavigationOptions: {
      title: "BussinessSearch",
    },
  }
);

export default createAppContainer(navigator);

```

#### 2. fix first character error in text input with "add availiable area by flex 1"

```
input: {
    //fix first chareacter cut off by increate area with flex 1
    flex: 1,
    fontSize: 18,
  },
```
