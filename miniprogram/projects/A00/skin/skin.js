module.exports = {
	PID: 'A00', // 运动场馆预定

	NAV_COLOR: '#ffffff',
	NAV_BG: '#24C68A',

	MEET_NAME: '预约', 
 
	MENU_ITEM: ['首页', '预约日历', '我的'], // 第1,4,5菜单

	NEWS_CATE: '1=场馆动态|leftpic,2=运动常识|rightpic',
	MEET_TYPE: '1=羽毛球场预约|leftbig2,2=足球场预约|leftbig3,3=篮球场预约|leftbig,4=乒乓球预约|upimg,5=网球场预约|upimg,6=游泳馆预约|upimg,7=健身房预约|leftbig3',

	DEFAULT_FORMS: [{
			type: 'line',
			title: '姓名',
			desc: '请填写您的姓名',
			must: true,
			len: 50,
			onlySet: {
				mode: 'all',
				cnt: -1
			},
			selectOptions: ['', ''],
			mobileTruth: true,
			checkBoxLimit: 2,
		},
		{
			type: 'line',
			title: '手机',
			desc: '请填写您的手机号码',
			must: true,
			len: 50,
			onlySet: {
				mode: 'all',
				cnt: -1
			},
			selectOptions: ['', ''],
			mobileTruth: true,
			checkBoxLimit: 2,
		}
	]
}