$(function () {
   var data=[
       {
           name:'红旗',
           countries:'中国',
           introduction:'红旗是一汽红旗汽车销售有限公司旗下汽车品牌，公司成立于1958年5月12日，主要生产中高端商务车。中国第一汽车集团公司为红旗品牌系列产品提供销售和销售渠道建设，全面负责红旗品牌轿车的销售和服务工作。',
           modelConfiguration:[
               {
                   model:'红旗L5',
                   time:'2009.12.13',
                   price:'499.00万参考价'
               },
               {
                   model:'红旗H7',
                   time:'2013.05.30',
                   price:'29.98-47.98万'
               },
               {
                   model:'红旗旗舰',
                   time:'1998.11.10',
                   price:'68.88万'
               }
           ]
       },
       {
           name:'奔驰',
           countries:'德国',
           introduction:'奔驰，德国汽车品牌，被认为是世界上最成功的高档汽车品牌之一，其完美的技术水平、过硬的质量标准、推陈出新的创新能力、以及一系列经典轿跑车款式令人称道。',
           modelConfiguration:[
               {
                   model:'奔驰C级',
                   time:'2009.12.13',
                   price:'24.98-59.89万'
               },
               {
                   model:'奔驰E级',
                   time:'2012.12.03',
                   price:'41.08-62.97万'
               },
               {
                   model:'奔驰GLC级',
                   time:'2014.2.18',
                   price:'38.40-57.89万'
               },
               {
                   model:'奔驰GLA级',
                   time:'2016.05.23',
                   price:'21.38-39.88万'
               },
           ]
       },
       {
           name:'福特',
           countries:'美国',
           introduction:'福特（Ford）是世界著名的汽车品牌，为美国福特汽车公司（Ford Motor Company）旗下的众多品牌之一，公司及品牌名“福特”来源于创始人亨利·福特（Henry Ford）的姓氏。福特汽车公司是世界上最大的汽车生产商之一，成立于1903年，旗下拥有福特（Ford）和林肯（Lincoln）汽车品牌，总部位于密歇根州 迪尔伯恩市（Dearborn）。除了制造汽车，公司还设有金融服务部门即福特信贷（Ford Credit），主要经营购车金融、车辆租赁和汽车保险方面的业务。',
           modelConfiguration:[
               {
                   model:'蒙迪欧',
                   time:'2009.12.13',
                   price:'14.48-28.18万'
               },
               {
                   model:'福克斯RS',
                   time:'2013.05.30',
                   price:'36.90-37.90万'
               },
               {
                   model:'福克斯',
                   time:'1998.11.10',
                   price:'8.09-13.08万'
               },
               {
                   model:'探险者',
                   time:'1998.11.10',
                   price:'39.38-57.98万'
               }
           ]
       },
   ];
   function init(){
       var str='';
       for(var i=0;i<data.length;i++){
           str+='<div class="list">';
           str+='<h2>'+data[i].name+'</h2>';
           str+='<p>汽车原产地：<span>'+data[i].countries+'</span></p>';
           str+='<p>汽车简介：'+data[i].introduction+'</p>';
           for(var j=0;j<data[i].modelConfiguration.length;j++){
               str+='<ul>';
               str+='<li>汽车型号：'+data[i].modelConfiguration[j].model+'</li>';
               str+='<li>汽车制造时间：'+data[i].modelConfiguration[j].time+'</li>';
               str+='<li>价格：'+data[i].modelConfiguration[j].price+'</li>';
               str+='</ul>';
           }
           str+='</div>';
       };
       $('.box').html(str);
   };
    init();
   // 搜索
    $('input').on('keyup',function (e) {
        if(e.keyCode ===13){
            var text=$('input').val();
            var str='';
            var index=0;
            for(var i=0;i<data.length;i++){
                if(text===data[i].name){
                    str+='<div class="list">';
                    str+='<h2>'+data[i].name+'</h2>';
                    str+='<p>汽车原产地：<span>'+data[i].countries+'</span></p>';
                    str+='<p>汽车简介：'+data[i].introduction+'</p>';
                    for(var j=0;j<data[i].modelConfiguration.length;j++){
                        str+='<ul>';
                        str+='<li>汽车型号：'+data[i].modelConfiguration[j].model+'</li>';
                        str+='<li>汽车制造时间：'+data[i].modelConfiguration[j].time+'</li>';
                        str+='<li>价格：'+data[i].modelConfiguration[j].price+'</li>';
                        str+='</ul>';
                    }
                    str+='</div>';
                }else if(text===''){
                   init();
                    return;
                }else{
                   index++;
                   if(index>=data.length){
                       str+='<h3>你输入的信息不存在</h3>';
                   };
                };
            };
            $('.box').html(str);
            $('input').val('');
        }
    });
});
