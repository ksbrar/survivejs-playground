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
                <Notes
                    notes={notes}
                    onNoteClick={this.activateNoteEdit}
                    onEdit={this.editNote}
                    onDelete={this.deleteNote}
                />
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

    activateNoteEdit = (id) => {
        console.log('Activate note edit!');

        this.setState({
            notes: this.state.notes.map(note => {
                if(note.id === id) {
                    note.editing = true;
                }

                return note;
            })
        });
    }

    editNote = (id, task) => {
        console.log('Edit note!');

        this.setState({
            notes: this.state.notes.map(note => {
                if(note.id === id) {
                    note.editing = false;
                    note.task = task;
                }

                return note;
            })
        });
    }
}
