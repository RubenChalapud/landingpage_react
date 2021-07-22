import React from 'react';
import { watchChanges, watchUserChanges } from '../Firebase/watcher.js';

export const DataContext = React.createContext({});

export const DataContextConsumer = DataContext.Consumer;

export class DataContextProvider extends React.Component {
    state = {
        data: [],
    }

    componentDidMount() {
        watchUserChanges((user)=>{
            if(user && !this.isSetup){
                this.isSetup = true;
                
                watchChanges(( data ) => {
                    this.setState({ data })
                });
            }
        });
    }

    render() {
        const {
            children,
        } = this.props;

        return (
            <DataContext.Provider
                value={{
                    ...this.state,
                }}
            >
                {children}
            </DataContext.Provider>
        );
    }
}