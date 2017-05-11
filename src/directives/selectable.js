const mouse = {
	mouseInit: function(el) {
		this._mouseMoved = false;
		el.onmousedown = function(event) {
			this._mouseMoved = false;
			this._mouseDownEvent = event;
			var that = this;
			// console.log(that)
			// if (_mouseDistanceMet(event)) {
				
			// }
				if (!this._mouseStarted) {
					event.preventDefault();
					this._mouseStarted = true;
					return true;
				}

		}
		el.onmousemove = function(event) {
			if (this._mouseStarted) {
				 event.preventDefault();
				 
				this._mouseDrag(event);
				 return true
			}
		}
		document.onmouseup = function(event) {
			this._mouseStarted = false
			console.log('dfdf')
		}
	},
	mouseDarg: function(event) {
		console.log('m')
	},
	_mouseDistanceMet: function(event) {
		return (Math.max(
			Math.abs(this._mouseDownEvent.pageX - event.pageX),
			Math.abs(this._mouseDownEvent.pageY - event.pageY)
		) >= 3);
	}
}


export default {
	bind(el, binding, vnode) {
		mouse.mouseInit(el);
	}
}