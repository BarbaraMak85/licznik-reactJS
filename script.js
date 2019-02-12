var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },


    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },


    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    getDefaultProps: function() {


        console.log("Metoda getDefaultProps");
        console.log("Użyj, kiedy chcesz ustawić domyślne wartości");
    },

    componentWillMount: function() {


        console.log("Metoda componentWillMount jest wywoływana zaraz przed wykonaniem metody reneder");

    },
    shouldComponentUpdate: function() {


        console.log("Użyj tej metody, kiedy chcesz zoptymalizoawać swoją aplikację");
        return true

    },

    componentWillUnmount: function() {


        console.log("Użyj tej metody, kiedy chcesz usunąć element");

    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('button', { onClick: this.increment }, 'Licznik plus'),
            React.createElement('button', { onClick: this.decrement }, 'Licznik minus'),

        );
    }
});

var elements = React.createElement('div', {},
    React.createElement(Counter),
    React.createElement(Counter)
);
ReactDOM.render(elements, document.getElementById('app'));