//export React


// домашнее задание:
//  - [ ] *ПРОСТО* сделать так, чтобы цена покупки "предметов" увеличивалась от их количества
//  - [ ] *СРЕДНЕ* оригинальная форма расчёта (начальная_цена*1.15^количество предметов), для
//        курсоров при их количестве 5 будет 10*1.15^5
//  - [ ] *СРЕДНЕ* выводить на экране скорость прироста печенек
//  - [ ] *СЛОЖНО* localstorage для сохранения состояния
//  - [ ] *СЛОЖНО* продажа "предметов" с возвратом стоимости


// view
class Cookie extends React.Component {
    constructor() {
	console.log("Cookie created")
	super()
	this.state = {
	    count: 1,
	    cursor : 0,
	    grandba: 0
	}
	setInterval(this.bake.bind(this), 100)
    }
    // здесь печём печеньки ;)
    bake() {
	var total = this.state.count + this.state.cursor + (5 * this.state.grandba)
	this.setState({
	    count : total/10
	})
    }
    clickHandler() {
	this.setState({
	    count : this.state.count + 1
	})
    }
    buyCursorHandler() {
	// хватает бабла?
	if (this.state.count >= 10) {
	    this.setState({
		// снимаем бабло
		count : this.state.count - 10,
		// увеличиваем количество курсоров
		cursor : this.state.cursor + 1
	    })
	}
    }
    buyclickGrandba() {
        if (this.state.count >= 100) {
	    this.setState({
		count : this.state.count - 100,
		grandba : this.state.grandba + 1
	    })
	}
    }
    render() {
	return (
	    <div>
		<h1>Печенек: {this.state.count}</h1>
		<h1>Куплено курсоров: {this.state.cursor}</h1>
		<h1>Куплено бабушек: {this.state.grandba}</h1>
		<button onClick={this.clickHandler.bind(this)}>COOKIE!!!!</button>
		<button onClick={this.buyCursorHandler.bind(this)}>BUY CURSOR ($10)</button>
		<button onClick={this.buyclickGrandba.bind(this)}>BUY GRANDBA ($100)</button>
	    </div>
	)
    }
}



ReactDOM.render(<Cookie />, document.getElementById("cookie-info"))
ReactDOM.render(<Cookie />, document.getElementById("cookie-control"))
