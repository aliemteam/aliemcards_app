import React from 'react';
import {
    Button,
    Modal,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    View
} from 'react-native';

import { getCategories } from './CardLibrary';
import { analyzeThis } from './utils';
import Colors from './colors';

const ListItem = (props) =>
    <TouchableOpacity onPress={() => {props.onPress()}}>
        <View style={{borderBottomWidth: 1, borderColor: Colors.lightGray }}>
            <Text style={{ fontFamily: 'open-sans-regular', fontSize: 16, padding: 10 }}>
                {props.cat.name}
            </Text>
        </View>
    </TouchableOpacity>

class CardsSortModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cats: getCategories()
        }
    }
  
    componentDidMount() {
        analyzeThis('CardsSortModal');
    }

    render() {
        return (
            <Modal
            animationType="fade"
            transparent={true}
            visible={this.props.visible}
            onRequestClose={() => {
                this.props.closeModal
            }}>
                <SafeAreaView
                    style={{
                        flex: 1,
                        padding: 20,
                        backgroundColor: 'rgba(0,176,146,.8)',
                    }}>
                    <View style={{ flex: 1, margin: 30, padding: 20, backgroundColor: 'white', overflow: 'hidden'}}>
                        <Button  title="Cancel" onPress={() => { this.props.closeModal()} }  />
                        <ScrollView>
                            <ListItem key={99999999999} cat={{ name: 'All Categories' }} onPress={() => this.props.onPress(null)} />
                            { this.state.cats.map((cat,index) => 
                                <ListItem 
                                    key={index}
                                    cat={cat}
                                    onPress={() => this.props.onPress(cat)}
                                />
                            )}
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </Modal>
        );
    }
}

export default CardsSortModal;
