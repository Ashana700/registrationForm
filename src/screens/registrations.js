import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, Image, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { deleteEntry } from '../redux/slice';

export default function Registrations() {

    const navigation = useNavigation();
      
    const dispatch = useDispatch();
    const handleDeleteClick = (employeeId) => {
        dispatch(
            deleteEntry({ 
                deleteId: employeeId,
                type: "RegistrationForm/deleteEntry",
            }));
    };

    const handleEditClick = (id, name, employeeId, dob) => {
        //console.log(name);
        navigation.navigate('Home', {
            editId: id,
            editName: name,
            editEmployeeId: employeeId,
            editDob: dob,
        });
      }

    const entries = useSelector((state) => state.RegistrationForm);
    const Item = ({ id, name, dob, employeeId }) => (
        <View style={styles.box}>
            <View style={{ flexDirection: 'row', marginBottom: '2%' }}>
                <Text style={styles.fieldName}>Name: </Text>
                <Text style={styles.value}> {name} </Text>
                <TouchableOpacity onPressIn={() => handleEditClick(id, name, employeeId, dob)}>
                    <Image style={styles.icon} source={require('../images/edit_icon.png')}/>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', marginBottom: '2%' }}>
                <Text style={styles.fieldName}>Emp Id: </Text>
                <Text style={styles.value}> {employeeId} </Text>
                <TouchableOpacity onPressIn={() => handleDeleteClick(employeeId)}>
                    <Image style={styles.icon} source={require('../images/delete_icon.png')}/>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.fieldName}>DoB: </Text>
                <Text style={styles.value}> {dob} </Text>
            </View>
        </View>
        
    );

    return (
        <View style={styles.container}>
            <FlatList style={styles.list}
                data={entries}
                renderItem={({ item }) => <Item id = {item.id} name={item.name} dob={item.dob} employeeId={item.employeeId} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: 'white',
        backgroundColor: '#4682B4',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8%',
        paddingBottom: 0,
    },
    list: {
        marginTop: 0,
        width: '100%',
    },
    box: {
        backgroundColor: '#FAF9F6',
        borderRadius: 10,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: '8%',
        padding: '5%',
        color: 'black',
    },
    fieldName: {
        width: '30%',
        fontSize: 15,
        color: 'grey'
    },
    value: {
        fontSize: 15,
        fontWeight: '400',
        width: '40%',
    },
    btn: {
        backgroundColor: '#4682B4',
        borderRadius: 10,
        width: '25%',
        padding: '1%',
        marginLeft: '2%',
        alignItems: 'center'
    },
    btn_text: {
        fontSize: 12,
        color: '#fff',
        alignItems: 'center'
    },
    icon: {
        height: 22,
        width: 22,
        margin: '4%',
        marginEnd: '0%',
        marginStart: '30%',
        marginBottom: '0%',
    }
});