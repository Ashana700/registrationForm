import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, Alert, ScrollView } from 'react-native';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addEntry, editEntry } from '../redux/slice';
import { useNavigation } from '@react-navigation/native';

export default function Home(props) {
  
  const [name, setName] = useState('');
  const [employeeId, setId] = useState('');
  const [dob, setDob] = useState('');
  const navigation = useNavigation();
  const entries = useSelector((state) => state.RegistrationForm);

  const handleName = (name) => {   setName(name);   };
  const handleId = (id) => {    setId(id);     };
  const handleDob = (dob) => {    setDob(dob);    };

  const dispatch = useDispatch();

  const handleSubmitRegister = () => {

    if (name && employeeId && dob) {
      dispatch(
        addEntry({
          name: name,
          employeeId: employeeId,
          dob: dob,
          type: "RegistrationForm/addEntry",
        }))

      Alert.alert(
        '',
        'Registered!',
        [
          {
            text: 'OK',
          },
        ],
      )
    }
    else {
      Alert.alert(
        '',
        'Please enter the details.',
        [
          {
            text: 'OK',
          },
        ],
      )
    }

    console.log(entries);
    setName('');
    setDob('');
    setId('');
    navigation.navigate('Home');
  }

  const handleSubmitUpdate = () => {
    const {editId, editName, editEmployeeId, editDob} =  props.route.params;
    dispatch(
      editEntry({
        id: editId,
        name: name?name:editName,
        employeeId: employeeId?employeeId:editEmployeeId,
        dob: dob?dob:editDob,
        type: "RegistrationForm/editEntry",
      })
    )

    Alert.alert(
      '',
      'Updated!',
      [
        {
          text: 'OK',
        },
      ],
    )

    console.log(entries);
    setName('');
    setDob('');
    setId('');
    navigation.navigate('Home');
  }

  const handleList = () => {
    navigation.navigate('Registrations');
    console.log("list");
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.box}>
        <Text style={styles.title_text}>Registration Form</Text>

        {(props.route.params) ?
          (<><TextInput style={styles.input} onChangeText={handleName}>{props.route.params.editName}</TextInput>
            <TextInput style={styles.input} placeholder='Employee Id' onChangeText={handleId}>{props.route.params.editEmployeeId}</TextInput>
            <TextInput style={styles.input} placeholder='DoB' onChangeText={handleDob}>{props.route.params.editDob}</TextInput>


            <TouchableOpacity onPress={handleSubmitUpdate} style={styles.btn}>
              <Text style={styles.btn_text}> UPDATE </Text>
            </TouchableOpacity></>) :

          (<><TextInput style={styles.input} placeholder='Name' onChangeText={handleName}>{name}</TextInput>
            <TextInput style={styles.input} placeholder='Employee Id' onChangeText={handleId}>{employeeId}</TextInput>
            <TextInput style={styles.input} placeholder='DoB' onChangeText={handleDob}>{dob}</TextInput>


            <TouchableOpacity onPress={handleSubmitRegister} style={styles.btn}>
              <Text style={styles.btn_text}> REGISTER </Text>
            </TouchableOpacity></>)}


      </View>

      <TouchableOpacity onPress={handleList} style={styles.btnList}>
        <Text style={styles.btn_list}> LIST </Text>
      </TouchableOpacity>
      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4682B4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    // height: '55%',
    width: '70%',
    margin: '5%',
    borderRadius: 10,
    backgroundColor: '#FAF9F6',
    padding: '3%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {

    fontSize: 15,
    borderWidth: 0.6,
    color: '#808080',
    width: '90%',
    padding: '2%',
    marginBottom: '8%',
    borderRadius: 3,
  },
  title_text: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: '15%',
  },
  btn: {
    backgroundColor: '#4682B4',
    borderRadius: 10,
    padding: '3%',
    margin: '4%',
    width: '90%',
    alignItems: 'center'
  },
  btnList: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: '1%',
    margin: '4%',
    width: '20%',
    alignItems: 'center'
  },
  btn_list: {
    fontSize: 18,
    color: '#4682B4',
    fontWeight: '600',
    alignItems: 'center'
  },
  btn_text: {
    fontSize: 18,
    color: '#fff',
    alignItems: 'center'
  },
});