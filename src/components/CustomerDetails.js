import React from 'react';
import { TextInput, ScrollView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as acts from '../actions/actions';

let styles;
class CustomerDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           details:{},
           errors:{}
        }
     }

    onChange(key, value){
      const { details } = this.state
      details[key] = value
      this.setState({details})  

    }

     _validateForm(){

        const { errors, details } = this.state;
        let formIsValid = true;
          
        if (details.name == null) {
          formIsValid = false;
          errors["name"] = "*Please enter  Name.";
        }
  
        if (details.title == null) {
          formIsValid = false;
          errors["title"] = "*Please enter Title";
        }

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(details.email != null && reg.test(details.email) === false){
          formIsValid = false;
          errors["email"] = "*Please enter a valid email id";
        }
  
      this.setState({errors})
      return formIsValid;
  
   }

   onSubmit(){
       if(this._validateForm()){
        this.props.actions.insertData(this.state.details)
       }
   }

    render() {
        return (
            <ScrollView style={styles.container}>
              <TextInput
                  style={styles.input}
                  placeholder="Name"
                  onChangeText={(text) => this.onChange("name", text)}
                />
               <Text style={styles.error}>{this.state.errors.name}</Text> 

              <TextInput
                  style={styles.input}
                  placeholder="Title"
                  onChangeText={(text) => this.onChange("title", text)}
                />
               <Text style={styles.error}>{this.state.errors.title}</Text>
              
               <TextInput
                  style={styles.input}
                  placeholder="Corporation"
                  onChangeText={(text) => this.onChange("corporation", text)}
                />

               <TextInput
                  style={styles.input}
                  placeholder="Address 1"
                  onChangeText={(text) => this.onChange("address1", text)}
                />

              <TextInput
                  style={styles.input}
                  placeholder="Address 2"
                  onChangeText={(text) => this.onChange("address2", text)}
                />
               <TextInput
                  style={styles.input}
                  placeholder="City"
                  onChangeText={(text) => this.onChange("city", text)}
                />
               <TextInput
                  style={styles.input}
                  placeholder="State"
                  onChangeText={(text) => this.onChange("state", text)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="ZIP"
                  onChangeText={(text) => this.onChange("zip", text)}
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Office Tele"
                  onChangeText={(text) => this.onChange("ofcTele", text)}
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Cell Tele"
                  onChangeText={(text) => this.onChange("cellTele", text)}
                  keyboardType="numeric"
                />
                 <TextInput
                  style={styles.input}
                  placeholder="Email"
                  onChangeText={(text) => this.onChange("email", text)}
                />
                <Text style={styles.error}>{this.state.errors.email}</Text>
                <TextInput
                  style={styles.input}
                  placeholder="URL"
                  onChangeText={(text) => this.onChange("url", text)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Customer Type"
                  onChangeText={(text) => this.onChange("type", text)}
                />
               <TouchableOpacity onPress={()=>this.onSubmit()} style={styles.button}>
                 <Text>Submit</Text>
               </TouchableOpacity> 
            </ScrollView>
        )
    }
}
styles = StyleSheet.create({
    container: {
       flex:1, padding:10
    },
    input:{
         borderRadius:5, paddingHorizontal:10, borderColor:"#3D4D5C", borderWidth:0.2, marginTop:15, backgroundColor:"#d3d3d350"
    },
    button:{
        backgroundColor:"#d3d3d3",  alignSelf:"center", padding:15, borderRadius:5, marginVertical:15
    },
    error:{
        color:"red", fontSize:10
    }
})

function mapStateToProps(state) {
    return {
        data: state.dataReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(acts, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomerDetails)