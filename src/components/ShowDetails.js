import React from 'react';
import { TextInput, ScrollView, Text, StyleSheet, FlatList, View} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as acts from '../actions/actions';

let styles;
class ShowDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           details:{},
           errors:{}
        }
     }

   componentDidMount(){
       this.props.actions.fetchData()
   }
   renderItems = ({ item, index }) => {
    return (
        <View style={{elevation:4, padding:10, backgroundColor:"#fff", marginTop:10, borderRadius:5, marginHorizontal:10}}>
           <View style={{flexDirection:"row", justifyContent:"space-between"}}>
             <Text>Name :</Text>
             <Text>{item.name}</Text>
           </View>
           <View style={{flexDirection:"row", justifyContent:"space-between"}}>
             <Text>Title :</Text>
             <Text>{item.title}</Text>
           </View>
           <View style={{flexDirection:"row", justifyContent:"space-between"}}>
             <Text>Cell :</Text>
             <Text>{item.cellTele}</Text>
           </View>
           <View style={{flexDirection:"row", justifyContent:"space-between"}}>
             <Text>Email :</Text>
             <Text>{item.email}</Text>
           </View>
        </View>
    )}    

    render() {
        return (
         <FlatList
            style={{flex:1}}
            data={this.props.data.data}
            renderItem={this.renderItems}
            keyExtractor={(item, index) => item.id}
          />
        )
    }
}
styles = StyleSheet.create({
    container: {
       flex:1, padding:10
    },
})

function mapStateToProps(state) {
    return {
        data: state.DataReducer
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
)(ShowDetails)