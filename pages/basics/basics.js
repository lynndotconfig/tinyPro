var initData = 'this is first line of text'
var extraLine = [];

//text data

var types = ['default', 'primary', 'warn']

Page({
	data: {
		// icon 
		iconSize: [20, 30, 40, 50, 60, 70],
		iconColor: [
			'red', 'orange', 'yellow', 'green', 'rgb(0, 255,255)', 'blue', 'purple'
		],
		iconType: [
			'success', 'info', 'warn', 'waiting', 'safe_success', 'safe_warn',
			'success_circle', 'success_no_circle', 'waiting_circle', 'circle', 'download',
			'info_circle', 'cancel', 'search', 'clear'
		],

		//text
		text: initData,

		//button
		defaultSize: 'default',
		primarySize: 'primary',
		warnSize: 'warn',
		disabled: false,
		plain: false,
		loading: false
	},

	//text
	add: function (e) {
		extraLine.push('other line')
		this.setData({
			text: initData +　'\n' + extraLine.join('\n')
		})
	},
	remove: function(e) {
		if (extraLine.length > 0) {
			extraLine.pop()
			this.setData({
				text: initData + '\n' + extraLine.join('\n')
			})
		}
	},

	//button
	setDisabled: function(e){
		this.setData({
			disabled: !this.data.disabled
		})
	},
	setPlain: function(e){
		this.setData({
			plain: !this.data.plain
		})
	},
	setLoading: function(e){
		this.setData({
			loading: !this.data.loading
		})
	}
})