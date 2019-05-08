$(function(){
	var data=[
		{
			id:001,
			name:"张三",
			age:18,
			school:"河南农业",
			zhuanye:[
				"前端","UI","网营","3G4G","JAVA"
			]
		},
		{
			id:002,
			name:"李四",
			age:19,
			school:"河南艺术",
			zhuanye:[
				"计算机","UI","HTML","3G4G","食品"
			]
		},
		{
			id:003,
			name:"王五",
			age:20,
			school:"河南林业",
			zhuanye:[
				"绘画","园林","网营","3G4G","动漫"
			]
		}
	]
	function init(){
		var str='';
		for(var i=0;i<data.length;i++){
			str+="<ul>";
			str+="<li>学生号："+data[i].id+"</li>";
			str+="<li>姓名："+data[i].name+"</li>";
			str+="<li>年龄："+data[i].age+"</li>";
			str+="<li>所在学校：<span>"+data[i].school+"</span></li>";		
				for(var j=0;j<data[i].zhuanye.length;j++){
					str+="<ul>";
					str+="<li class='col'>专业"+(j+1)+"："+data[i].zhuanye[j]+"</li>"
					str+="</ul>";
				}
			str+="</ul>";
		}
		$('div').html(str);
	}
	
	init();
	
	
	
})
