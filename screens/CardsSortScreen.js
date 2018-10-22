import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View  } from 'react-native';
import { withNavigation } from 'react-navigation';
import { FontAwesome as Icon } from '@expo/vector-icons';

import CardList from '../components/CardList';
import CardListSection from '../components/CardListSection';
import CardsSortModal from '../components/CardsSortModal';
import { getSummaries } from '../components/CardLibrary';
import Colors from '../components/colors';

const FilterButton = (props) =>
  <TouchableOpacity onPress={props.onPress} style={{ backgroundColor: Colors.lightGray }}>
    <View style={{ flex: 0, flexDirection: 'row', padding: 10 }}>
      <Icon name='sort' size={18} color={Colors.primary} style={{ marginRight: 8}}></Icon>
      <Text style={{ fontSize: 18, color: Colors.primary }}>Filter by Category</Text>
    </View>
  </TouchableOpacity>

class CardsSortScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    }
  }

  toggleModal() {
    this.setState({ modalVisible: !this.state.modalVisible })
  }

  selectCategory(cat) {
    this.setState({ selectedCategory: cat, modalVisible: !this.state.modalVisible });
  }

  render() {
    return(
      <SafeAreaView style={{ flex: 1 }}>
        <FilterButton onPress={() => this.toggleModal()} />
        <CardsSortModal 
          visible={this.state.modalVisible}
          closeModal={() => this.toggleModal()}
          onPress={(cat) => this.selectCategory(cat) }
        />
        { this.state.selectedCategory == null && (<CardList cards={getSummaries()} />) }
        { this.state.selectedCategory && (
            <CardListSection sections={[{ title: this.state.selectedCategory.name, data: this.state.selectedCategory.cards }]}/>
        )}
      </SafeAreaView>
    );
  }
}

export default withNavigation(CardsSortScreen);
