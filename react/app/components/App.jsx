import React from 'react';
import uuid from 'uuid';

import Notes from './Notes';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [
                {
                    id: uuid.v4(),
                    task: 'note1',
                },
                {
                    id: uuid.v4(),
                    task: 'note2',
                },
            ]
        };
    }

    render() {
        const {notes} = this.state;

        return (
            <div>
                <button onClick={this.addNote}>+</button>
                <Notes notes={notes}  />
            </div>
        );
    }

    // Written in FP-style rather than an imperative-style push: ...

    deleteNote = (id, e) => {
        console.log('Delete note!');

        e.stopPropagation();

        this.setState({
            notes: this.state.notes.filter(note => note.id !== id)
        })
    }

    addNote = () => {
        console.log('Add note!');

        this.setState({
            notes: this.state.notes.concat([{
                id: uuid.v4(),
                task: 'New task?',
            }])
        });
    }
}
