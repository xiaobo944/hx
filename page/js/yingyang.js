const yingyang = {
	"reason":"查询成功",
	"result":[
		{
			"ShengZhuHuoJi":[ 
				// 营养饲料-生猪活鸡最新价格
{"title":"辽宁生猪报价","date":"2018/10/25","price":"10000"},
{"title":"河南生猪报价","date":"2018/10/25","price":"12170"},
{"title":"四川生猪报价","date":"2018/10/25","price":"16300"},
{"title":"湖南生猪报价","date":"2018/10/25","price":"15140"},
{"title":"广东生猪报价","date":"2018/10/25","price":"15490"},
{"title":"辽宁活鸡报价","date":"2018/10/25","price":"8960"},
{"title":"山东活鸡报价","date":"2018/10/25","price":"8720"},
{"title":"广东活鸡报价","date":"2018/10/25","price":"10000"}
			],
// 			"daogu":[ 
// 				营养饲料花生粕--同油脂油料花生粕
// 营养饲料蛋白豆粕--同油脂油料蛋白豆粕
// 营养饲料菜籽粕--同油脂油料菜籽粕
// 			],
			"YingYangSiLiaoDDGS":[ 
				// 营养饲料DDGS-无分类
{"title":"黑龙江肇东DDGS报价","date":"2018/10/25","price":"1950"},
{"title":"吉林松原DDGS报价","date":"2018/10/25","price":"2000"},
{"title":"吉林四平DDGS报价","date":"2018/10/25","price":"2100"},
{"title":"河南南阳DDGS报价","date":"2018/10/25","price":"2200"},
{"title":"山东青岛DDGS报价","date":"2018/10/25","price":"2250"},
{"title":"上海港口DDGS报价","date":"2018/10/25","price":"2240"},
{"title":"广州港口DDGS报价","date":"2018/10/25","price":"2200"}
			],
			"YingYangSiLiaoYuMiPeiYaPo":[ 
				// 营养饲料玉米胚芽粕-无分类
{"title":"黑龙江肇东玉米胚芽粕报价","date":"2018/10/25","price":"1550"},
{"title":"吉林长春玉米胚芽粕报价","date":"2018/10/25","price":"1750"},
{"title":"吉林四平玉米胚芽粕报价","date":"2018/10/25","price":"1500"},
{"title":"山东邹平玉米胚芽粕报价","date":"2018/10/25","price":"1650"},
{"title":"山东潍坊玉米胚芽粕报价","date":"2018/10/25","price":"1600"}
			],
			"YingYangSiLiaoYuMiPeiYaYou":[ 
				//营养饲料玉米胚芽油-无分类
{"title":"黑龙江肇东玉米胚芽油报价","date":"2018/10/25","price":"5500"},
{"title":"吉林长春玉米胚芽油报价","date":"2018/10/25","price":"5650"},
{"title":"吉林四平玉米胚芽油报价","date":"2018/10/25","price":"5600"},
{"title":"山东邹平玉米胚芽油报价","date":"2018/10/25","price":"5750"}
			],

			 
		}
		
	],
	"error_code":0
};









const dingyue = {
	"reason":"查询成功",
	"result":[
		{
			"JiShi":[ 
				//集市我的订阅
{"title":"湖南长沙早籼稻报价","percentage":"0","price":"2320"},
{"title":"湖南常德早籼稻报价","percentage":"0","price":"2310"},
{"title":"广东广州早籼稻报价","percentage":"0","price":"2720"},
{"title":"广西桂林早籼稻报价","percentage":"0","price":"2700"},
{"title":"江西九江早籼稻报价","percentage":"0","price":"2380"},
{"title":"江西南昌早籼稻报价","percentage":"0","price":"2380"},
{"title":"湖北武汉早籼稻报价","percentage":"0","price":"2220"},
{"title":"福建福州早籼稻报价","percentage":"0","price":"2700"}
			],
			"WoDe":[ 
				//我的我的订阅
{"title":"湖南长沙早籼稻报价","date":"3万订阅"},
{"title":"湖南常德早籼稻报价","date":"1.5万订阅"},
{"title":"广东广州早籼稻报价","date":"0.5万订阅"},
{"title":"广西桂林早籼稻报价","date":"0.19万订阅"},
{"title":"江西九江早籼稻报价","date":"0.26万订阅"},
{"title":"江西南昌早籼稻报价","date":"0.10万订阅"},
{"title":"湖北武汉早籼稻报价","date":"0.20万订阅"},
{"title":"福建福州早籼稻报价","date":"0.30万订阅"}
			] 
		}
		
	],
	"error_code":0
};
 

console.log("0000000000")
console.log(yingyang);
console.log(dingyue);


sessionStorage.dingyue = JSON.stringify(dingyue);











































