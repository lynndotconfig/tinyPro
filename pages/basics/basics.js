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
		loading: false,

		//checkbox
		items: [
			{name: 'USA', value: '美国'},
			{name: 'CHN', value: '中国', checked: 'true'},
			{name: 'BRA', value: '巴西'},
			{name: 'JPN', value: '日本'},
			{name: 'ENG', value: '英国'},
			{name: 'FRE', value: '法国'},
		],

		//input
		focus: false,
		inputValue: ''
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
	},

	//checkbox
	checkboxChange: function(e){
		console.log('checkbox发送change事件，携带value值为：', e.detail.value)
	},

	//form
	formSubmit: function(e){
		console.log("form发送了submit事件， 携带数据为：", e.detail.value)
	},
	formReset: function(e){
		console.log("form发送了reset事件")
	},

	//input
	bindButtonTap: function(){
		this.setData({
			focus: Date.now()
		})
	},
	bindKeyInput: function(e){
		this.setData({
			inputValue: e.detail.value
		})
	},
	bindReplaceInput: function(e){
		var value = e.detail.value
		var pos = e.detail.cursor
		if(pos != -1){
			//光标在中间
			var left = e.detail.value.slice(0, pos)
			//计算光标位置
			pos = left.replace(/11/g, '2').length
		}

		//直接返回对象，可以对输入进行过滤处理，同时可以控制光标位置
		return {
			value: value.replace(/11/g, '2'),
			cursor: pos
		}
	},
	bindHideKeyboard: function(e){
		if (e.detail.value === '123'){
			//收起键盘
			wx.hideKeyboard()
		}
	}
})