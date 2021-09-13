// const emitter = new EventEmitter();
// const sub = emitter.subscribe(eventName, callback); // typeof eventName === string
// emitter.emit(eventName, a, b, c, d, ...);
// sub.unsubscribe();

class EventEmitter {
	constructor() {
		this.eventMap = new Map()
	}

	subscribe(eventName, callback) {
		this.eventMap.set(eventName, callback)

		return {
			unsubscribe: () => {
				this.eventMap.delete(eventName)
			}
		}
	}

	emit(eventName, ...args) {
		if(!this.eventMap.has(eventName)) return

		this.eventMap.get(eventName).apply(null, args)
	}
}