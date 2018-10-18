import React from 'react';
import { AsyncStorage } from 'react-native';

const FavsContext = React.createContext();

class FavsProvider extends React.Component {
    state = {
        fullfavs: {},
        favs: () => this.favsAsArray(),
        setFav: (summary) => { this.setFav(summary) },
        dropFav: (slug) => { this.dropFav(slug) },
        isFav: (slug) => this.isFav(slug),
        test: () => this.favsAsArray()
    }

    async getFavs() {
        try {
            const value = await AsyncStorage.getItem('FAVORITES');
            if (value !== null) {
                const fullfavs = JSON.parse(value);
                const favs = 
                this.setState({ fullfavs });
            }
        } catch (error) {
            console.error(error);
        }
    }

    favsAsArray() {
        return Object.keys(this.state.fullfavs).map(key => this.state.fullfavs[key]);
    }

    async saveFavs(fullfavs) {
        try {
            await AsyncStorage.setItem('FAVORITES', JSON.stringify(fullfavs));
            return true;
        } catch (error) {
            console.error(error);
        }
    }

    async setFav(summary) {
        let fullfavs = this.state.fullfavs;
        fullfavs[summary.slug] = summary;
        const saved = await this.saveFavs(fullfavs);
        if (saved) this.setState({ fullfavs });
    }

    async dropFav(slug) {
        let fullfavs = this.state.fullfavs;
        delete fullfavs[slug];
        const saved = this.saveFavs(fullfavs);
        if (saved) this.setState({ fullfavs });   
    }

    isFav(slug) {
        if (this.state.fullfavs[slug]) return true;
        return false;
    }

    async componentDidMount() {
        this.getFavs();
    }

    render() {
        return (
        <FavsContext.Provider value={this.state}>
            {this.props.children}
        </FavsContext.Provider>
        );
    }
}

export {
    FavsContext,
    FavsProvider
}