$(function(){
	var data=[
		{
			id:1,
			name:'张三',
			age:18,
			school:'河南农业',
			zhuanye:[
				{
					textbook:'计算机基础',
					hour:'66',
					teacher:'张老师',
				},
				{
					textbook:'HTML+CSS基础',
					hour:'78',
					teacher:'王老师',
				},
				{
					textbook:'JavaScript',
					hour:'56',
					teacher:'李老师',
				},
				{
					textbook:'JQuery',
					hour:'88',
					teacher:'赵老师',
				}
			]
		}
	]
	function init(){
		var str='';
		for(var i=0;i<data.length;i++){
			str+="<ul>";
			str+="<li>编号"+data[i].id+"</li>";
			str+="<li>姓名"+data[i].name+"</li>";
			str+="<li>年龄"+data[i].age+"</li>";
			str+="<li>学校"+data[i].school+"</li>";
			for(var j=0;j<data[i].zhuanye.length;j++){
				str+="<li>课程"+data[i].zhuanye[j].textbook+"</li>";
				str+="<li>课时"+data[i].zhuanye[j].hour+"</li>";
				str+="<li>老师"+data[i].zhuanye[j].teacher+"</li>";
			}
			str+="</ul>";
		}
		$('.box').html(str);
	}
	init();
})
