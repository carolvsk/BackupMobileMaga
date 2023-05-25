import { TextInput, View } from "react-native";
 
 export const NumericKeyboard = () => {
    return (
     <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
         <TextInput placeholder="AQUI CEGO" style={{backgroundColor: "green", width: "50%", height: "10%"}} keyboardType="number-pad"/>
     </View>
    );
  };

