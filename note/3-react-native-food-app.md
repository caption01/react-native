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

### 3. inject navigation props with " withNavigation from react-navigation "

- using withNavigation to wrapper compoennt and recieve 'navigation props'

- send some data to navigate screen on second arguments by 'navigation.navigate(< screenName >, { [key]: [value] })'

- on Screen recieve data by 'navigation.getParam("id")'
