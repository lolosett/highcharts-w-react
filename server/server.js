const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;



app.set('port', port);

app.use(express.static(path.join(__dirname, '../client')));

app.get('/', function(req, res){
	res.sendFile(__dirname + '../client/index.html')
});


app.get('/dummydata', function(req, res){
	res.send({
	"experiment": {
		"id": "9b45cb83-6861-4b3e-80b0-0de6aa9c5ff5",
		"name": "Testing Reg Page",
		"variations": [
			{
				"id": "fe2b90d5-7798-4a2a-8450-3a01bc549e34",
				"participations": 44415,
				"conversions": 2113,
				"conversion_rate": 0.047574017786783745,
				"conversion_rate_hourly": [
					{
						"time": 1487196000000,
						"conversions": 19,
						"participations": 398,
						"conversion_rate": 0.04773869346733668,
						"cumulative_conversion_rate": 0.04773869346733668
					},
					{
						"time": 1487199600000,
						"conversions": 20,
						"participations": 399,
						"conversion_rate": 0.05012531328320802,
						"cumulative_conversion_rate": 0.04893350062735257
					},
					{
						"time": 1487203200000,
						"conversions": 19,
						"participations": 400,
						"conversion_rate": 0.0475,
						"cumulative_conversion_rate": 0.04845446950710108
					},
					{
						"time": 1487206800000,
						"conversions": 16,
						"participations": 320,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.04878048780487805
					},
					{
						"time": 1487210400000,
						"conversions": 15,
						"participations": 319,
						"conversion_rate": 0.047021943573667714,
						"cumulative_conversion_rate": 0.04847494553376906
					},
					{
						"time": 1487214000000,
						"conversions": 15,
						"participations": 319,
						"conversion_rate": 0.047021943573667714,
						"cumulative_conversion_rate": 0.04825986078886311
					},
					{
						"time": 1487217600000,
						"conversions": 11,
						"participations": 239,
						"conversion_rate": 0.04602510460251046,
						"cumulative_conversion_rate": 0.04803675856307435
					},
					{
						"time": 1487221200000,
						"conversions": 12,
						"participations": 239,
						"conversion_rate": 0.0502092050209205,
						"cumulative_conversion_rate": 0.04823395366502089
					},
					{
						"time": 1487224800000,
						"conversions": 9,
						"participations": 199,
						"conversion_rate": 0.04522613065326633,
						"cumulative_conversion_rate": 0.0480225988700565
					},
					{
						"time": 1487228400000,
						"conversions": 10,
						"participations": 200,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.048153034300791556
					},
					{
						"time": 1487232000000,
						"conversions": 8,
						"participations": 159,
						"conversion_rate": 0.050314465408805034,
						"cumulative_conversion_rate": 0.04826073331244124
					},
					{
						"time": 1487235600000,
						"conversions": 7,
						"participations": 160,
						"conversion_rate": 0.04375,
						"cumulative_conversion_rate": 0.048045359594151
					},
					{
						"time": 1487239200000,
						"conversions": 7,
						"participations": 160,
						"conversion_rate": 0.04375,
						"cumulative_conversion_rate": 0.04784961549416121
					},
					{
						"time": 1487242800000,
						"conversions": 7,
						"participations": 159,
						"conversion_rate": 0.0440251572327044,
						"cumulative_conversion_rate": 0.047683923705722074
					},
					{
						"time": 1487246400000,
						"conversions": 5,
						"participations": 120,
						"conversion_rate": 0.041666666666666664,
						"cumulative_conversion_rate": 0.047493403693931395
					},
					{
						"time": 1487250000000,
						"conversions": 5,
						"participations": 120,
						"conversion_rate": 0.041666666666666664,
						"cumulative_conversion_rate": 0.04731457800511509
					},
					{
						"time": 1487253600000,
						"conversions": 5,
						"participations": 119,
						"conversion_rate": 0.04201680672268908,
						"cumulative_conversion_rate": 0.047158103747828244
					},
					{
						"time": 1487257200000,
						"conversions": 12,
						"participations": 240,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.047317873038182245
					},
					{
						"time": 1487260800000,
						"conversions": 12,
						"participations": 240,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.04746063428698159
					},
					{
						"time": 1487264400000,
						"conversions": 11,
						"participations": 239,
						"conversion_rate": 0.04602510460251046,
						"cumulative_conversion_rate": 0.04738837405223252
					},
					{
						"time": 1487268000000,
						"conversions": 20,
						"participations": 400,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.04759129759129759
					},
					{
						"time": 1487271600000,
						"conversions": 19,
						"participations": 400,
						"conversion_rate": 0.0475,
						"cumulative_conversion_rate": 0.047584715212689255
					},
					{
						"time": 1487275200000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.04758701866487305
					},
					{
						"time": 1487278800000,
						"conversions": 19,
						"participations": 400,
						"conversion_rate": 0.0475,
						"cumulative_conversion_rate": 0.047581534583267686
					},
					{
						"time": 1487282400000,
						"conversions": 20,
						"participations": 400,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.047724914776937896
					},
					{
						"time": 1487286000000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.04771900363839911
					},
					{
						"time": 1487289600000,
						"conversions": 20,
						"participations": 398,
						"conversion_rate": 0.05025125628140704,
						"cumulative_conversion_rate": 0.0478525980911983
					},
					{
						"time": 1487293200000,
						"conversions": 15,
						"participations": 320,
						"conversion_rate": 0.046875,
						"cumulative_conversion_rate": 0.04781281790437437
					},
					{
						"time": 1487296800000,
						"conversions": 15,
						"participations": 320,
						"conversion_rate": 0.046875,
						"cumulative_conversion_rate": 0.047776148582600195
					},
					{
						"time": 1487300400000,
						"conversions": 16,
						"participations": 320,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.04785983066792098
					},
					{
						"time": 1487304000000,
						"conversions": 11,
						"participations": 240,
						"conversion_rate": 0.04583333333333333,
						"cumulative_conversion_rate": 0.04780420860018298
					},
					{
						"time": 1487307600000,
						"conversions": 11,
						"participations": 239,
						"conversion_rate": 0.04602510460251046,
						"cumulative_conversion_rate": 0.04775687409551375
					},
					{
						"time": 1487311200000,
						"conversions": 9,
						"participations": 199,
						"conversion_rate": 0.04522613065326633,
						"cumulative_conversion_rate": 0.047702025702461334
					},
					{
						"time": 1487314800000,
						"conversions": 10,
						"participations": 199,
						"conversion_rate": 0.05025125628140704,
						"cumulative_conversion_rate": 0.04775610276089969
					},
					{
						"time": 1487318400000,
						"conversions": 7,
						"participations": 160,
						"conversion_rate": 0.04375,
						"cumulative_conversion_rate": 0.04768892149669846
					},
					{
						"time": 1487322000000,
						"conversions": 7,
						"participations": 160,
						"conversion_rate": 0.04375,
						"cumulative_conversion_rate": 0.047623956293165653
					},
					{
						"time": 1487325600000,
						"conversions": 8,
						"participations": 159,
						"conversion_rate": 0.050314465408805034,
						"cumulative_conversion_rate": 0.04766734279918864
					},
					{
						"time": 1487329200000,
						"conversions": 7,
						"participations": 160,
						"conversion_rate": 0.04375,
						"cumulative_conversion_rate": 0.04760479041916168
					},
					{
						"time": 1487332800000,
						"conversions": 5,
						"participations": 120,
						"conversion_rate": 0.041666666666666664,
						"cumulative_conversion_rate": 0.04753451676528599
					},
					{
						"time": 1487336400000,
						"conversions": 5,
						"participations": 119,
						"conversion_rate": 0.04201680672268908,
						"cumulative_conversion_rate": 0.04747051369529194
					},
					{
						"time": 1487340000000,
						"conversions": 5,
						"participations": 120,
						"conversion_rate": 0.041666666666666664,
						"cumulative_conversion_rate": 0.04740341073321129
					},
					{
						"time": 1487343600000,
						"conversions": 11,
						"participations": 240,
						"conversion_rate": 0.04583333333333333,
						"cumulative_conversion_rate": 0.047367925416705904
					},
					{
						"time": 1487347200000,
						"conversions": 11,
						"participations": 239,
						"conversion_rate": 0.04602510460251046,
						"cumulative_conversion_rate": 0.04733836802357708
					},
					{
						"time": 1487350800000,
						"conversions": 11,
						"participations": 240,
						"conversion_rate": 0.04583333333333333,
						"cumulative_conversion_rate": 0.047305820868624976
					},
					{
						"time": 1487354400000,
						"conversions": 20,
						"participations": 399,
						"conversion_rate": 0.05012531328320802,
						"cumulative_conversion_rate": 0.047403670522745064
					},
					{
						"time": 1487358000000,
						"conversions": 20,
						"participations": 400,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.04749096410859881
					},
					{
						"time": 1487361600000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.04749512036434613
					},
					{
						"time": 1487365200000,
						"conversions": 20,
						"participations": 400,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.04757403906742281
					},
					{
						"time": 1487368800000,
						"conversions": 19,
						"participations": 400,
						"conversion_rate": 0.0475,
						"cumulative_conversion_rate": 0.0475717776420281
					},
					{
						"time": 1487372400000,
						"conversions": 20,
						"participations": 398,
						"conversion_rate": 0.05025125628140704,
						"cumulative_conversion_rate": 0.047650807766414706
					},
					{
						"time": 1487376000000,
						"conversions": 19,
						"participations": 398,
						"conversion_rate": 0.04773869346733668,
						"cumulative_conversion_rate": 0.047653325655053265
					},
					{
						"time": 1487379600000,
						"conversions": 15,
						"participations": 320,
						"conversion_rate": 0.046875,
						"cumulative_conversion_rate": 0.047635800731775965
					},
					{
						"time": 1487383200000,
						"conversions": 16,
						"participations": 319,
						"conversion_rate": 0.050156739811912224,
						"cumulative_conversion_rate": 0.04769114307342922
					},
					{
						"time": 1487386800000,
						"conversions": 15,
						"participations": 320,
						"conversion_rate": 0.046875,
						"cumulative_conversion_rate": 0.04767355733620632
					},
					{
						"time": 1487390400000,
						"conversions": 11,
						"participations": 239,
						"conversion_rate": 0.04602510460251046,
						"cumulative_conversion_rate": 0.04764744864148443
					},
					{
						"time": 1487394000000,
						"conversions": 11,
						"participations": 239,
						"conversion_rate": 0.04602510460251046,
						"cumulative_conversion_rate": 0.047622154087024596
					},
					{
						"time": 1487397600000,
						"conversions": 10,
						"participations": 199,
						"conversion_rate": 0.05025125628140704,
						"cumulative_conversion_rate": 0.047655847501288
					},
					{
						"time": 1487401200000,
						"conversions": 9,
						"participations": 199,
						"conversion_rate": 0.04522613065326633,
						"cumulative_conversion_rate": 0.04762510332549119
					},
					{
						"time": 1487404800000,
						"conversions": 7,
						"participations": 160,
						"conversion_rate": 0.04375,
						"cumulative_conversion_rate": 0.04758607666645685
					},
					{
						"time": 1487408400000,
						"conversions": 7,
						"participations": 159,
						"conversion_rate": 0.0440251572327044,
						"cumulative_conversion_rate": 0.04755079147451078
					},
					{
						"time": 1487412000000,
						"conversions": 7,
						"participations": 160,
						"conversion_rate": 0.04375,
						"cumulative_conversion_rate": 0.047513266691348886
					},
					{
						"time": 1487415600000,
						"conversions": 8,
						"participations": 160,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.047537577905413665
					},
					{
						"time": 1487419200000,
						"conversions": 5,
						"participations": 119,
						"conversion_rate": 0.04201680672268908,
						"cumulative_conversion_rate": 0.047497725204731576
					},
					{
						"time": 1487422800000,
						"conversions": 6,
						"participations": 120,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.047515808491418246
					},
					{
						"time": 1487426400000,
						"conversions": 5,
						"participations": 120,
						"conversion_rate": 0.041666666666666664,
						"cumulative_conversion_rate": 0.04747384155455904
					},
					{
						"time": 1487430000000,
						"conversions": 11,
						"participations": 239,
						"conversion_rate": 0.04602510460251046,
						"cumulative_conversion_rate": 0.047453430794623906
					},
					{
						"time": 1487433600000,
						"conversions": 12,
						"participations": 239,
						"conversion_rate": 0.0502092050209205,
						"cumulative_conversion_rate": 0.047491716561064934
					},
					{
						"time": 1487437200000,
						"conversions": 11,
						"participations": 239,
						"conversion_rate": 0.04602510460251046,
						"cumulative_conversion_rate": 0.047471620227038186
					},
					{
						"time": 1487440800000,
						"conversions": 19,
						"participations": 400,
						"conversion_rate": 0.0475,
						"cumulative_conversion_rate": 0.047472256473489516
					},
					{
						"time": 1487444400000,
						"conversions": 20,
						"participations": 399,
						"conversion_rate": 0.05012531328320802,
						"cumulative_conversion_rate": 0.047530288909599254
					},
					{
						"time": 1487448000000,
						"conversions": 19,
						"participations": 400,
						"conversion_rate": 0.0475,
						"cumulative_conversion_rate": 0.04752963896786653
					},
					{
						"time": 1487451600000,
						"conversions": 19,
						"participations": 400,
						"conversion_rate": 0.0475,
						"cumulative_conversion_rate": 0.04752901633317578
					},
					{
						"time": 1487455200000,
						"conversions": 20,
						"participations": 399,
						"conversion_rate": 0.05012531328320802,
						"cumulative_conversion_rate": 0.04758230452674897
					},
					{
						"time": 1487458800000,
						"conversions": 19,
						"participations": 398,
						"conversion_rate": 0.04773869346733668,
						"cumulative_conversion_rate": 0.047585442080854926
					},
					{
						"time": 1487462400000,
						"conversions": 19,
						"participations": 398,
						"conversion_rate": 0.04773869346733668,
						"cumulative_conversion_rate": 0.04758845621664361
					},
					{
						"time": 1487466000000,
						"conversions": 15,
						"participations": 319,
						"conversion_rate": 0.047021943573667714,
						"cumulative_conversion_rate": 0.04757966431525176
					},
					{
						"time": 1487469600000,
						"conversions": 15,
						"participations": 320,
						"conversion_rate": 0.046875,
						"cumulative_conversion_rate": 0.047568862275449104
					},
					{
						"time": 1487473200000,
						"conversions": 15,
						"participations": 319,
						"conversion_rate": 0.047021943573667714,
						"cumulative_conversion_rate": 0.04756063036708502
					},
					{
						"time": 1487476800000,
						"conversions": 11,
						"participations": 240,
						"conversion_rate": 0.04583333333333333,
						"cumulative_conversion_rate": 0.047541289539983204
					},
					{
						"time": 1487480400000,
						"conversions": 11,
						"participations": 240,
						"conversion_rate": 0.04583333333333333,
						"cumulative_conversion_rate": 0.04752237704161669
					},
					{
						"time": 1487484000000,
						"conversions": 10,
						"participations": 200,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.04754503062997165
					},
					{
						"time": 1487487600000,
						"conversions": 9,
						"participations": 199,
						"conversion_rate": 0.04522613065326633,
						"cumulative_conversion_rate": 0.047524124495990576
					},
					{
						"time": 1487491200000,
						"conversions": 7,
						"participations": 160,
						"conversion_rate": 0.04375,
						"cumulative_conversion_rate": 0.04749696397247335
					},
					{
						"time": 1487494800000,
						"conversions": 8,
						"participations": 159,
						"conversion_rate": 0.050314465408805034,
						"cumulative_conversion_rate": 0.04751697034655234
					},
					{
						"time": 1487498400000,
						"conversions": 7,
						"participations": 159,
						"conversion_rate": 0.0440251572327044,
						"cumulative_conversion_rate": 0.04749235067181056
					},
					{
						"time": 1487502000000,
						"conversions": 7,
						"participations": 159,
						"conversion_rate": 0.0440251572327044,
						"cumulative_conversion_rate": 0.047468075737560546
					},
					{
						"time": 1487505600000,
						"conversions": 5,
						"participations": 119,
						"conversion_rate": 0.04201680672268908,
						"cumulative_conversion_rate": 0.047439660081475314
					},
					{
						"time": 1487509200000,
						"conversions": 6,
						"participations": 120,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.04745304806309643
					},
					{
						"time": 1487512800000,
						"conversions": 6,
						"participations": 120,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.047466296761888245
					},
					{
						"time": 1487516400000,
						"conversions": 11,
						"participations": 239,
						"conversion_rate": 0.04602510460251046,
						"cumulative_conversion_rate": 0.047451518791831133
					},
					{
						"time": 1487520000000,
						"conversions": 11,
						"participations": 239,
						"conversion_rate": 0.04602510460251046,
						"cumulative_conversion_rate": 0.047437040811993035
					},
					{
						"time": 1487523600000,
						"conversions": 11,
						"participations": 240,
						"conversion_rate": 0.04583333333333333,
						"cumulative_conversion_rate": 0.04742086013368647
					},
					{
						"time": 1487527200000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.047424129661787814
					},
					{
						"time": 1487530800000,
						"conversions": 20,
						"participations": 399,
						"conversion_rate": 0.05012531328320802,
						"cumulative_conversion_rate": 0.0474679682733374
					},
					{
						"time": 1487534400000,
						"conversions": 19,
						"participations": 400,
						"conversion_rate": 0.0475,
						"cumulative_conversion_rate": 0.04746848108865319
					},
					{
						"time": 1487538000000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.047470847778127954
					},
					{
						"time": 1487541600000,
						"conversions": 19,
						"participations": 400,
						"conversion_rate": 0.0475,
						"cumulative_conversion_rate": 0.047471300031026994
					},
					{
						"time": 1487545200000,
						"conversions": 19,
						"participations": 400,
						"conversion_rate": 0.0475,
						"cumulative_conversion_rate": 0.04747173846623892
					},
					{
						"time": 1487548800000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.04747394951660836
					},
					{
						"time": 1487552400000,
						"conversions": 15,
						"participations": 320,
						"conversion_rate": 0.046875,
						"cumulative_conversion_rate": 0.047466825261123294
					},
					{
						"time": 1487556000000,
						"conversions": 15,
						"participations": 319,
						"conversion_rate": 0.047021943573667714,
						"cumulative_conversion_rate": 0.04746161193152597
					},
					{
						"time": 1487559600000,
						"conversions": 15,
						"participations": 319,
						"conversion_rate": 0.047021943573667714,
						"cumulative_conversion_rate": 0.04745651937111942
					},
					{
						"time": 1487563200000,
						"conversions": 12,
						"participations": 240,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.04747849249487059
					},
					{
						"time": 1487566800000,
						"conversions": 11,
						"participations": 240,
						"conversion_rate": 0.04583333333333333,
						"cumulative_conversion_rate": 0.047464401698725955
					},
					{
						"time": 1487570400000,
						"conversions": 9,
						"participations": 199,
						"conversion_rate": 0.04522613065326633,
						"cumulative_conversion_rate": 0.047448618001417434
					},
					{
						"time": 1487574000000,
						"conversions": 9,
						"participations": 199,
						"conversion_rate": 0.04522613065326633,
						"cumulative_conversion_rate": 0.04743305535029382
					},
					{
						"time": 1487577600000,
						"conversions": 7,
						"participations": 159,
						"conversion_rate": 0.0440251572327044,
						"cumulative_conversion_rate": 0.04741409475820561
					},
					{
						"time": 1487581200000,
						"conversions": 8,
						"participations": 159,
						"conversion_rate": 0.050314465408805034,
						"cumulative_conversion_rate": 0.04743014232522532
					},
					{
						"time": 1487584800000,
						"conversions": 7,
						"participations": 160,
						"conversion_rate": 0.04375,
						"cumulative_conversion_rate": 0.04740976571962487
					},
					{
						"time": 1487588400000,
						"conversions": 7,
						"participations": 159,
						"conversion_rate": 0.0440251572327044,
						"cumulative_conversion_rate": 0.04739124449339207
					},
					{
						"time": 1487592000000,
						"conversions": 5,
						"participations": 119,
						"conversion_rate": 0.04201680672268908,
						"cumulative_conversion_rate": 0.04736932305055699
					},
					{
						"time": 1487595600000,
						"conversions": 5,
						"participations": 119,
						"conversion_rate": 0.04201680672268908,
						"cumulative_conversion_rate": 0.04734757970915546
					},
					{
						"time": 1487599200000,
						"conversions": 5,
						"participations": 120,
						"conversion_rate": 0.041666666666666664,
						"cumulative_conversion_rate": 0.04732440334534575
					},
					{
						"time": 1487602800000,
						"conversions": 12,
						"participations": 239,
						"conversion_rate": 0.0502092050209205,
						"cumulative_conversion_rate": 0.04734765453748356
					},
					{
						"time": 1487606400000,
						"conversions": 12,
						"participations": 239,
						"conversion_rate": 0.0502092050209205,
						"cumulative_conversion_rate": 0.04737053392211963
					},
					{
						"time": 1487610000000,
						"conversions": 11,
						"participations": 240,
						"conversion_rate": 0.04583333333333333,
						"cumulative_conversion_rate": 0.04735829018983141
					},
					{
						"time": 1487613600000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.04736169794634961
					},
					{
						"time": 1487617200000,
						"conversions": 19,
						"participations": 400,
						"conversion_rate": 0.0475,
						"cumulative_conversion_rate": 0.04736348646988458
					},
					{
						"time": 1487620800000,
						"conversions": 19,
						"participations": 398,
						"conversion_rate": 0.04773869346733668,
						"cumulative_conversion_rate": 0.04736825305627374
					},
					{
						"time": 1487624400000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.0473714069591528
					},
					{
						"time": 1487628000000,
						"conversions": 19,
						"participations": 400,
						"conversion_rate": 0.0475,
						"cumulative_conversion_rate": 0.04737300796812749
					},
					{
						"time": 1487631600000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.047376026070649
					},
					{
						"time": 1487635200000,
						"conversions": 20,
						"participations": 398,
						"conversion_rate": 0.05025125628140704,
						"cumulative_conversion_rate": 0.04741078208048595
					},
					{
						"time": 1487638800000,
						"conversions": 15,
						"participations": 320,
						"conversion_rate": 0.046875,
						"cumulative_conversion_rate": 0.0474056249060009
					},
					{
						"time": 1487642400000,
						"conversions": 16,
						"participations": 320,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.04743035900491584
					},
					{
						"time": 1487646000000,
						"conversions": 16,
						"participations": 319,
						"conversion_rate": 0.050156739811912224,
						"cumulative_conversion_rate": 0.047456026443159015
					},
					{
						"time": 1487649600000,
						"conversions": 11,
						"participations": 239,
						"conversion_rate": 0.04602510460251046,
						"cumulative_conversion_rate": 0.047446004161416054
					},
					{
						"time": 1487653200000,
						"conversions": 11,
						"participations": 239,
						"conversion_rate": 0.04602510460251046,
						"cumulative_conversion_rate": 0.047436121296781326
					},
					{
						"time": 1487656800000,
						"conversions": 10,
						"participations": 200,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.04745095769920722
					},
					{
						"time": 1487660400000,
						"conversions": 9,
						"participations": 200,
						"conversion_rate": 0.045,
						"cumulative_conversion_rate": 0.047436856337379894
					},
					{
						"time": 1487664000000,
						"conversions": 8,
						"participations": 159,
						"conversion_rate": 0.050314465408805034,
						"cumulative_conversion_rate": 0.047449958477706826
					},
					{
						"time": 1487667600000,
						"conversions": 7,
						"participations": 160,
						"conversion_rate": 0.04375,
						"cumulative_conversion_rate": 0.04743308343547789
					},
					{
						"time": 1487671200000,
						"conversions": 8,
						"participations": 160,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.04744473766351693
					},
					{
						"time": 1487674800000,
						"conversions": 8,
						"participations": 159,
						"conversion_rate": 0.050314465408805034,
						"cumulative_conversion_rate": 0.04745762711864407
					},
					{
						"time": 1487678400000,
						"conversions": 5,
						"participations": 119,
						"conversion_rate": 0.04201680672268908,
						"cumulative_conversion_rate": 0.047439398631718234
					},
					{
						"time": 1487682000000,
						"conversions": 5,
						"participations": 119,
						"conversion_rate": 0.04201680672268908,
						"cumulative_conversion_rate": 0.047421291879454514
					},
					{
						"time": 1487685600000,
						"conversions": 6,
						"participations": 119,
						"conversion_rate": 0.05042016806722689,
						"cumulative_conversion_rate": 0.047431272198450655
					},
					{
						"time": 1487689200000,
						"conversions": 12,
						"participations": 240,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.047448398477650915
					},
					{
						"time": 1487692800000,
						"conversions": 11,
						"participations": 239,
						"conversion_rate": 0.04602510460251046,
						"cumulative_conversion_rate": 0.04743901092835854
					},
					{
						"time": 1487696400000,
						"conversions": 11,
						"participations": 239,
						"conversion_rate": 0.04602510460251046,
						"cumulative_conversion_rate": 0.04742974640164496
					},
					{
						"time": 1487700000000,
						"conversions": 19,
						"participations": 400,
						"conversion_rate": 0.0475,
						"cumulative_conversion_rate": 0.04743050847457627
					},
					{
						"time": 1487703600000,
						"conversions": 20,
						"participations": 399,
						"conversion_rate": 0.05012531328320802,
						"cumulative_conversion_rate": 0.04745935504641305
					},
					{
						"time": 1487707200000,
						"conversions": 20,
						"participations": 398,
						"conversion_rate": 0.05025125628140704,
						"cumulative_conversion_rate": 0.04748885113612232
					},
					{
						"time": 1487710800000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.047490215649707124
					},
					{
						"time": 1487714400000,
						"conversions": 20,
						"participations": 398,
						"conversion_rate": 0.05025125628140704,
						"cumulative_conversion_rate": 0.04751878135641686
					},
					{
						"time": 1487718000000,
						"conversions": 19,
						"participations": 398,
						"conversion_rate": 0.04773869346733668,
						"cumulative_conversion_rate": 0.04752103326729616
					},
					{
						"time": 1487721600000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.047522029236489585
					},
					{
						"time": 1487725200000,
						"conversions": 15,
						"participations": 320,
						"conversion_rate": 0.046875,
						"cumulative_conversion_rate": 0.04751679886828677
					},
					{
						"time": 1487728800000,
						"conversions": 15,
						"participations": 319,
						"conversion_rate": 0.047021943573667714,
						"cumulative_conversion_rate": 0.04751284300213006
					},
					{
						"time": 1487732400000,
						"conversions": 16,
						"participations": 320,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.04753262896208826
					},
					{
						"time": 1487736000000,
						"conversions": 11,
						"participations": 240,
						"conversion_rate": 0.04583333333333333,
						"cumulative_conversion_rate": 0.04752255035215618
					},
					{
						"time": 1487739600000,
						"conversions": 12,
						"participations": 239,
						"conversion_rate": 0.0502092050209205,
						"cumulative_conversion_rate": 0.04753832547169811
					},
					{
						"time": 1487743200000,
						"conversions": 9,
						"participations": 200,
						"conversion_rate": 0.045,
						"cumulative_conversion_rate": 0.04752591433600626
					},
					{
						"time": 1487746800000,
						"conversions": 9,
						"participations": 200,
						"conversion_rate": 0.045,
						"cumulative_conversion_rate": 0.047513623978201636
					},
					{
						"time": 1487750400000,
						"conversions": 8,
						"participations": 159,
						"conversion_rate": 0.050314465408805034,
						"cumulative_conversion_rate": 0.0475244165475123
					},
					{
						"time": 1487754000000,
						"conversions": 8,
						"participations": 159,
						"conversion_rate": 0.050314465408805034,
						"cumulative_conversion_rate": 0.04753512626140698
					},
					{
						"time": 1487757600000,
						"conversions": 7,
						"participations": 159,
						"conversion_rate": 0.0440251572327044,
						"cumulative_conversion_rate": 0.0475217046247084
					},
					{
						"time": 1487761200000,
						"conversions": 8,
						"participations": 160,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.047531204331472655
					},
					{
						"time": 1487764800000,
						"conversions": 5,
						"participations": 119,
						"conversion_rate": 0.04201680672268908,
						"cumulative_conversion_rate": 0.04751552795031056
					},
					{
						"time": 1487768400000,
						"conversions": 5,
						"participations": 119,
						"conversion_rate": 0.04201680672268908,
						"cumulative_conversion_rate": 0.04749994044641368
					},
					{
						"time": 1487772000000,
						"conversions": 6,
						"participations": 120,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.04750706667616808
					},
					{
						"time": 1487775600000,
						"conversions": 11,
						"participations": 239,
						"conversion_rate": 0.04602510460251046,
						"cumulative_conversion_rate": 0.047498700930606076
					},
					{
						"time": 1487779200000,
						"conversions": 12,
						"participations": 240,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.047512800037578094
					},
					{
						"time": 1487782800000,
						"conversions": 12,
						"participations": 240,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.04752674109019571
					},
					{
						"time": 1487786400000,
						"conversions": 20,
						"participations": 400,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.047549632097737056
					},
					{
						"time": 1487790000000,
						"conversions": 19,
						"participations": 400,
						"conversion_rate": 0.0475,
						"cumulative_conversion_rate": 0.04754917694529781
					},
					{
						"time": 1487793600000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.04754981030056569
					},
					{
						"time": 1487797200000,
						"conversions": 20,
						"participations": 398,
						"conversion_rate": 0.05025125628140704,
						"cumulative_conversion_rate": 0.047574017786783745
					}
				]
			},
			{
				"id": "06543f5b-4932-4e49-9b67-108351b1d981",
				"participations": 44406,
				"conversions": 2135,
				"conversion_rate": 0.04807908841147593,
				"conversion_rate_hourly": [
					{
						"time": 1487196000000,
						"conversions": 20,
						"participations": 398,
						"conversion_rate": 0.05025125628140704,
						"cumulative_conversion_rate": 0.05025125628140704
					},
					{
						"time": 1487199600000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.04893350062735257
					},
					{
						"time": 1487203200000,
						"conversions": 19,
						"participations": 398,
						"conversion_rate": 0.04773869346733668,
						"cumulative_conversion_rate": 0.048535564853556486
					},
					{
						"time": 1487206800000,
						"conversions": 15,
						"participations": 319,
						"conversion_rate": 0.047021943573667714,
						"cumulative_conversion_rate": 0.04821664464993395
					},
					{
						"time": 1487210400000,
						"conversions": 16,
						"participations": 319,
						"conversion_rate": 0.050156739811912224,
						"cumulative_conversion_rate": 0.048554282596835786
					},
					{
						"time": 1487214000000,
						"conversions": 15,
						"participations": 320,
						"conversion_rate": 0.046875,
						"cumulative_conversion_rate": 0.048304691128657685
					},
					{
						"time": 1487217600000,
						"conversions": 12,
						"participations": 239,
						"conversion_rate": 0.0502092050209205,
						"cumulative_conversion_rate": 0.048494983277591976
					},
					{
						"time": 1487221200000,
						"conversions": 12,
						"participations": 239,
						"conversion_rate": 0.0502092050209205,
						"cumulative_conversion_rate": 0.04865070315469403
					},
					{
						"time": 1487224800000,
						"conversions": 9,
						"participations": 200,
						"conversion_rate": 0.045,
						"cumulative_conversion_rate": 0.04839279406570116
					},
					{
						"time": 1487228400000,
						"conversions": 9,
						"participations": 200,
						"conversion_rate": 0.045,
						"cumulative_conversion_rate": 0.04816892114813593
					},
					{
						"time": 1487232000000,
						"conversions": 7,
						"participations": 160,
						"conversion_rate": 0.04375,
						"cumulative_conversion_rate": 0.04794735192729552
					},
					{
						"time": 1487235600000,
						"conversions": 8,
						"participations": 160,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.048045359594151
					},
					{
						"time": 1487239200000,
						"conversions": 7,
						"participations": 159,
						"conversion_rate": 0.0440251572327044,
						"cumulative_conversion_rate": 0.04786324786324787
					},
					{
						"time": 1487242800000,
						"conversions": 7,
						"participations": 160,
						"conversion_rate": 0.04375,
						"cumulative_conversion_rate": 0.047683923705722074
					},
					{
						"time": 1487246400000,
						"conversions": 6,
						"participations": 120,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.047757255936675465
					},
					{
						"time": 1487250000000,
						"conversions": 6,
						"participations": 119,
						"conversion_rate": 0.05042016806722689,
						"cumulative_conversion_rate": 0.047838321821437706
					},
					{
						"time": 1487253600000,
						"conversions": 5,
						"participations": 119,
						"conversion_rate": 0.04201680672268908,
						"cumulative_conversion_rate": 0.047666335650446874
					},
					{
						"time": 1487257200000,
						"conversions": 12,
						"participations": 240,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.04779756326148079
					},
					{
						"time": 1487260800000,
						"conversions": 12,
						"participations": 239,
						"conversion_rate": 0.0502092050209205,
						"cumulative_conversion_rate": 0.0479254493010872
					},
					{
						"time": 1487264400000,
						"conversions": 11,
						"participations": 239,
						"conversion_rate": 0.04602510460251046,
						"cumulative_conversion_rate": 0.04782975136957438
					},
					{
						"time": 1487268000000,
						"conversions": 19,
						"participations": 400,
						"conversion_rate": 0.0475,
						"cumulative_conversion_rate": 0.047804119704624955
					},
					{
						"time": 1487271600000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.047790802524797116
					},
					{
						"time": 1487275200000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.0477792732166891
					},
					{
						"time": 1487278800000,
						"conversions": 19,
						"participations": 400,
						"conversion_rate": 0.0475,
						"cumulative_conversion_rate": 0.047761664564943254
					},
					{
						"time": 1487282400000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.047753225567254934
					},
					{
						"time": 1487286000000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.0477457294875385
					},
					{
						"time": 1487289600000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.04773902665428988
					},
					{
						"time": 1487293200000,
						"conversions": 15,
						"participations": 319,
						"conversion_rate": 0.047021943573667714,
						"cumulative_conversion_rate": 0.04770992366412214
					},
					{
						"time": 1487296800000,
						"conversions": 16,
						"participations": 319,
						"conversion_rate": 0.050156739811912224,
						"cumulative_conversion_rate": 0.04780535517789461
					},
					{
						"time": 1487300400000,
						"conversions": 16,
						"participations": 319,
						"conversion_rate": 0.050156739811912224,
						"cumulative_conversion_rate": 0.04789362202871264
					},
					{
						"time": 1487304000000,
						"conversions": 11,
						"participations": 239,
						"conversion_rate": 0.04602510460251046,
						"cumulative_conversion_rate": 0.04784250887032162
					},
					{
						"time": 1487307600000,
						"conversions": 11,
						"participations": 239,
						"conversion_rate": 0.04602510460251046,
						"cumulative_conversion_rate": 0.04779411764705882
					},
					{
						"time": 1487311200000,
						"conversions": 9,
						"participations": 200,
						"conversion_rate": 0.045,
						"cumulative_conversion_rate": 0.0477332170880558
					},
					{
						"time": 1487314800000,
						"conversions": 10,
						"participations": 199,
						"conversion_rate": 0.05025125628140704,
						"cumulative_conversion_rate": 0.047786666666666665
					},
					{
						"time": 1487318400000,
						"conversions": 7,
						"participations": 160,
						"conversion_rate": 0.04375,
						"cumulative_conversion_rate": 0.04771893025694809
					},
					{
						"time": 1487322000000,
						"conversions": 7,
						"participations": 159,
						"conversion_rate": 0.0440251572327044,
						"cumulative_conversion_rate": 0.04765834536826903
					},
					{
						"time": 1487325600000,
						"conversions": 8,
						"participations": 159,
						"conversion_rate": 0.050314465408805034,
						"cumulative_conversion_rate": 0.04770120775398356
					},
					{
						"time": 1487329200000,
						"conversions": 7,
						"participations": 159,
						"conversion_rate": 0.0440251572327044,
						"cumulative_conversion_rate": 0.04764282860567319
					},
					{
						"time": 1487332800000,
						"conversions": 6,
						"participations": 119,
						"conversion_rate": 0.05042016806722689,
						"cumulative_conversion_rate": 0.047675451584246374
					},
					{
						"time": 1487336400000,
						"conversions": 5,
						"participations": 120,
						"conversion_rate": 0.041666666666666664,
						"cumulative_conversion_rate": 0.047605111696419865
					},
					{
						"time": 1487340000000,
						"conversions": 5,
						"participations": 119,
						"conversion_rate": 0.04201680672268908,
						"cumulative_conversion_rate": 0.047540983606557376
					},
					{
						"time": 1487343600000,
						"conversions": 11,
						"participations": 240,
						"conversion_rate": 0.04583333333333333,
						"cumulative_conversion_rate": 0.047502356267672005
					},
					{
						"time": 1487347200000,
						"conversions": 12,
						"participations": 240,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.047557603686635946
					},
					{
						"time": 1487350800000,
						"conversions": 12,
						"participations": 240,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.04761045987376014
					},
					{
						"time": 1487354400000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.04761075811645922
					},
					{
						"time": 1487358000000,
						"conversions": 19,
						"participations": 398,
						"conversion_rate": 0.04773869346733668,
						"cumulative_conversion_rate": 0.04761504164213006
					},
					{
						"time": 1487361600000,
						"conversions": 20,
						"participations": 400,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.047692683323838206
					},
					{
						"time": 1487365200000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.047690367334069055
					},
					{
						"time": 1487368800000,
						"conversions": 20,
						"participations": 399,
						"conversion_rate": 0.05012531328320802,
						"cumulative_conversion_rate": 0.04776461597248758
					},
					{
						"time": 1487372400000,
						"conversions": 20,
						"participations": 400,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.047830923248053395
					},
					{
						"time": 1487376000000,
						"conversions": 20,
						"participations": 399,
						"conversion_rate": 0.05012531328320802,
						"cumulative_conversion_rate": 0.047896859694612506
					},
					{
						"time": 1487379600000,
						"conversions": 16,
						"participations": 319,
						"conversion_rate": 0.050156739811912224,
						"cumulative_conversion_rate": 0.047947616700697034
					},
					{
						"time": 1487383200000,
						"conversions": 16,
						"participations": 319,
						"conversion_rate": 0.050156739811912224,
						"cumulative_conversion_rate": 0.04799614378184823
					},
					{
						"time": 1487386800000,
						"conversions": 15,
						"participations": 319,
						"conversion_rate": 0.047021943573667714,
						"cumulative_conversion_rate": 0.047975203827235365
					},
					{
						"time": 1487390400000,
						"conversions": 11,
						"participations": 239,
						"conversion_rate": 0.04602510460251046,
						"cumulative_conversion_rate": 0.04794429708222812
					},
					{
						"time": 1487394000000,
						"conversions": 11,
						"participations": 239,
						"conversion_rate": 0.04602510460251046,
						"cumulative_conversion_rate": 0.04791435472289314
					},
					{
						"time": 1487397600000,
						"conversions": 9,
						"participations": 199,
						"conversion_rate": 0.04522613065326633,
						"cumulative_conversion_rate": 0.04787988142801908
					},
					{
						"time": 1487401200000,
						"conversions": 10,
						"participations": 200,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.047906858378928614
					},
					{
						"time": 1487404800000,
						"conversions": 8,
						"participations": 159,
						"conversion_rate": 0.050314465408805034,
						"cumulative_conversion_rate": 0.047930969326699
					},
					{
						"time": 1487408400000,
						"conversions": 7,
						"participations": 159,
						"conversion_rate": 0.0440251572327044,
						"cumulative_conversion_rate": 0.04789224245447742
					},
					{
						"time": 1487412000000,
						"conversions": 8,
						"participations": 160,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.047913064954309706
					},
					{
						"time": 1487415600000,
						"conversions": 8,
						"participations": 159,
						"conversion_rate": 0.050314465408805034,
						"cumulative_conversion_rate": 0.04793641088352186
					},
					{
						"time": 1487419200000,
						"conversions": 5,
						"participations": 120,
						"conversion_rate": 0.041666666666666664,
						"cumulative_conversion_rate": 0.0478907435508346
					},
					{
						"time": 1487422800000,
						"conversions": 5,
						"participations": 119,
						"conversion_rate": 0.04201680672268908,
						"cumulative_conversion_rate": 0.04784861998312643
					},
					{
						"time": 1487426400000,
						"conversions": 6,
						"participations": 120,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.047864066052411156
					},
					{
						"time": 1487430000000,
						"conversions": 12,
						"participations": 239,
						"conversion_rate": 0.0502092050209205,
						"cumulative_conversion_rate": 0.047897127352091076
					},
					{
						"time": 1487433600000,
						"conversions": 11,
						"participations": 239,
						"conversion_rate": 0.04602510460251046,
						"cumulative_conversion_rate": 0.04787110283852955
					},
					{
						"time": 1487437200000,
						"conversions": 12,
						"participations": 239,
						"conversion_rate": 0.0502092050209205,
						"cumulative_conversion_rate": 0.047903161034937754
					},
					{
						"time": 1487440800000,
						"conversions": 20,
						"participations": 398,
						"conversion_rate": 0.05025125628140704,
						"cumulative_conversion_rate": 0.04795557799091368
					},
					{
						"time": 1487444400000,
						"conversions": 19,
						"participations": 400,
						"conversion_rate": 0.0475,
						"cumulative_conversion_rate": 0.047945581216742555
					},
					{
						"time": 1487448000000,
						"conversions": 20,
						"participations": 399,
						"conversion_rate": 0.05012531328320802,
						"cumulative_conversion_rate": 0.047992269701524586
					},
					{
						"time": 1487451600000,
						"conversions": 20,
						"participations": 398,
						"conversion_rate": 0.05025125628140704,
						"cumulative_conversion_rate": 0.048039524860716915
					},
					{
						"time": 1487455200000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.04803088803088803
					},
					{
						"time": 1487458800000,
						"conversions": 20,
						"participations": 399,
						"conversion_rate": 0.05012531328320802,
						"cumulative_conversion_rate": 0.04807304277643261
					},
					{
						"time": 1487462400000,
						"conversions": 20,
						"participations": 399,
						"conversion_rate": 0.05012531328320802,
						"cumulative_conversion_rate": 0.04811353409484251
					},
					{
						"time": 1487466000000,
						"conversions": 15,
						"participations": 320,
						"conversion_rate": 0.046875,
						"cumulative_conversion_rate": 0.04809424134741761
					},
					{
						"time": 1487469600000,
						"conversions": 15,
						"participations": 320,
						"conversion_rate": 0.046875,
						"cumulative_conversion_rate": 0.04807554043042707
					},
					{
						"time": 1487473200000,
						"conversions": 15,
						"participations": 320,
						"conversion_rate": 0.046875,
						"cumulative_conversion_rate": 0.048057404522494455
					},
					{
						"time": 1487476800000,
						"conversions": 12,
						"participations": 240,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.048079167250151704
					},
					{
						"time": 1487480400000,
						"conversions": 11,
						"participations": 239,
						"conversion_rate": 0.04602510460251046,
						"cumulative_conversion_rate": 0.04805650447788754
					},
					{
						"time": 1487484000000,
						"conversions": 10,
						"participations": 200,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.04807428414600677
					},
					{
						"time": 1487487600000,
						"conversions": 9,
						"participations": 199,
						"conversion_rate": 0.04522613065326633,
						"cumulative_conversion_rate": 0.0480485925388695
					},
					{
						"time": 1487491200000,
						"conversions": 8,
						"participations": 159,
						"conversion_rate": 0.050314465408805034,
						"cumulative_conversion_rate": 0.048064806480648065
					},
					{
						"time": 1487494800000,
						"conversions": 7,
						"participations": 160,
						"conversion_rate": 0.04375,
						"cumulative_conversion_rate": 0.04803395889186774
					},
					{
						"time": 1487498400000,
						"conversions": 8,
						"participations": 160,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.04804791481810115
					},
					{
						"time": 1487502000000,
						"conversions": 8,
						"participations": 160,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.048061674008810576
					},
					{
						"time": 1487505600000,
						"conversions": 6,
						"participations": 119,
						"conversion_rate": 0.05042016806722689,
						"cumulative_conversion_rate": 0.048073973443183315
					},
					{
						"time": 1487509200000,
						"conversions": 5,
						"participations": 120,
						"conversion_rate": 0.041666666666666664,
						"cumulative_conversion_rate": 0.04804045512010114
					},
					{
						"time": 1487512800000,
						"conversions": 5,
						"participations": 119,
						"conversion_rate": 0.04201680672268908,
						"cumulative_conversion_rate": 0.04800936768149883
					},
					{
						"time": 1487516400000,
						"conversions": 11,
						"participations": 240,
						"conversion_rate": 0.04583333333333333,
						"cumulative_conversion_rate": 0.047986951669671214
					},
					{
						"time": 1487520000000,
						"conversions": 11,
						"participations": 239,
						"conversion_rate": 0.04602510460251046,
						"cumulative_conversion_rate": 0.04796703063262098
					},
					{
						"time": 1487523600000,
						"conversions": 12,
						"participations": 239,
						"conversion_rate": 0.0502092050209205,
						"cumulative_conversion_rate": 0.04798956931359354
					},
					{
						"time": 1487527200000,
						"conversions": 20,
						"participations": 398,
						"conversion_rate": 0.05025125628140704,
						"cumulative_conversion_rate": 0.04802680565897245
					},
					{
						"time": 1487530800000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.0480201847556261
					},
					{
						"time": 1487534400000,
						"conversions": 19,
						"participations": 400,
						"conversion_rate": 0.0475,
						"cumulative_conversion_rate": 0.04801185280102511
					},
					{
						"time": 1487538000000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.04800567554784802
					},
					{
						"time": 1487541600000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.04799968957355167
					},
					{
						"time": 1487545200000,
						"conversions": 20,
						"participations": 399,
						"conversion_rate": 0.05012531328320802,
						"cumulative_conversion_rate": 0.04803209782193351
					},
					{
						"time": 1487548800000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.04802589483985095
					},
					{
						"time": 1487552400000,
						"conversions": 15,
						"participations": 320,
						"conversion_rate": 0.046875,
						"cumulative_conversion_rate": 0.04801219829670125
					},
					{
						"time": 1487556000000,
						"conversions": 16,
						"participations": 319,
						"conversion_rate": 0.050156739811912224,
						"cumulative_conversion_rate": 0.048037341958247576
					},
					{
						"time": 1487559600000,
						"conversions": 15,
						"participations": 320,
						"conversion_rate": 0.046875,
						"cumulative_conversion_rate": 0.048023830281894796
					},
					{
						"time": 1487563200000,
						"conversions": 11,
						"participations": 240,
						"conversion_rate": 0.04583333333333333,
						"cumulative_conversion_rate": 0.048004897723998845
					},
					{
						"time": 1487566800000,
						"conversions": 12,
						"participations": 240,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.04802199371608112
					},
					{
						"time": 1487570400000,
						"conversions": 9,
						"participations": 200,
						"conversion_rate": 0.045,
						"cumulative_conversion_rate": 0.04800056721497448
					},
					{
						"time": 1487574000000,
						"conversions": 9,
						"participations": 200,
						"conversion_rate": 0.045,
						"cumulative_conversion_rate": 0.04797944241058857
					},
					{
						"time": 1487577600000,
						"conversions": 8,
						"participations": 159,
						"conversion_rate": 0.050314465408805034,
						"cumulative_conversion_rate": 0.04799243882801834
					},
					{
						"time": 1487581200000,
						"conversions": 7,
						"participations": 160,
						"conversion_rate": 0.04375,
						"cumulative_conversion_rate": 0.04796880983047307
					},
					{
						"time": 1487584800000,
						"conversions": 8,
						"participations": 160,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.047980060234707654
					},
					{
						"time": 1487588400000,
						"conversions": 8,
						"participations": 160,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.04799118669742142
					},
					{
						"time": 1487592000000,
						"conversions": 5,
						"participations": 119,
						"conversion_rate": 0.04201680672268908,
						"cumulative_conversion_rate": 0.04796681066995817
					},
					{
						"time": 1487595600000,
						"conversions": 6,
						"participations": 120,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.047975141705934574
					},
					{
						"time": 1487599200000,
						"conversions": 5,
						"participations": 119,
						"conversion_rate": 0.04201680672268908,
						"cumulative_conversion_rate": 0.04795102873660942
					},
					{
						"time": 1487602800000,
						"conversions": 12,
						"participations": 239,
						"conversion_rate": 0.0502092050209205,
						"cumulative_conversion_rate": 0.04796923492106329
					},
					{
						"time": 1487606400000,
						"conversions": 11,
						"participations": 239,
						"conversion_rate": 0.04602510460251046,
						"cumulative_conversion_rate": 0.04795368604223137
					},
					{
						"time": 1487610000000,
						"conversions": 12,
						"participations": 239,
						"conversion_rate": 0.0502092050209205,
						"cumulative_conversion_rate": 0.04797158223225549
					},
					{
						"time": 1487613600000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.047966973559188754
					},
					{
						"time": 1487617200000,
						"conversions": 20,
						"participations": 400,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.04799327318003946
					},
					{
						"time": 1487620800000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.04798850574712644
					},
					{
						"time": 1487624400000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.04798385825530439
					},
					{
						"time": 1487628000000,
						"conversions": 20,
						"participations": 399,
						"conversion_rate": 0.05012531328320802,
						"cumulative_conversion_rate": 0.04801046142350084
					},
					{
						"time": 1487631600000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.04800565857858966
					},
					{
						"time": 1487635200000,
						"conversions": 20,
						"participations": 399,
						"conversion_rate": 0.05012531328320802,
						"cumulative_conversion_rate": 0.048031352533722205
					},
					{
						"time": 1487638800000,
						"conversions": 16,
						"participations": 319,
						"conversion_rate": 0.050156739811912224,
						"cumulative_conversion_rate": 0.04805175267037761
					},
					{
						"time": 1487642400000,
						"conversions": 16,
						"participations": 319,
						"conversion_rate": 0.050156739811912224,
						"cumulative_conversion_rate": 0.048071764916254395
					},
					{
						"time": 1487646000000,
						"conversions": 16,
						"participations": 320,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.048089980516029994
					},
					{
						"time": 1487649600000,
						"conversions": 12,
						"participations": 239,
						"conversion_rate": 0.0502092050209205,
						"cumulative_conversion_rate": 0.04810482807140973
					},
					{
						"time": 1487653200000,
						"conversions": 12,
						"participations": 239,
						"conversion_rate": 0.0502092050209205,
						"cumulative_conversion_rate": 0.04811946902654867
					},
					{
						"time": 1487656800000,
						"conversions": 10,
						"participations": 200,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.048130354248668676
					},
					{
						"time": 1487660400000,
						"conversions": 9,
						"participations": 200,
						"conversion_rate": 0.045,
						"cumulative_conversion_rate": 0.048112338858195214
					},
					{
						"time": 1487664000000,
						"conversions": 8,
						"participations": 159,
						"conversion_rate": 0.050314465408805034,
						"cumulative_conversion_rate": 0.04812236830798316
					},
					{
						"time": 1487667600000,
						"conversions": 7,
						"participations": 159,
						"conversion_rate": 0.0440251572327044,
						"cumulative_conversion_rate": 0.04810379241516966
					},
					{
						"time": 1487671200000,
						"conversions": 7,
						"participations": 160,
						"conversion_rate": 0.04375,
						"cumulative_conversion_rate": 0.04808401930173148
					},
					{
						"time": 1487674800000,
						"conversions": 8,
						"participations": 159,
						"conversion_rate": 0.050314465408805034,
						"cumulative_conversion_rate": 0.04809404052106587
					},
					{
						"time": 1487678400000,
						"conversions": 6,
						"participations": 120,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.04810048156805317
					},
					{
						"time": 1487682000000,
						"conversions": 6,
						"participations": 120,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.048106879227595496
					},
					{
						"time": 1487685600000,
						"conversions": 6,
						"participations": 119,
						"conversion_rate": 0.05042016806722689,
						"cumulative_conversion_rate": 0.04811457983663422
					},
					{
						"time": 1487689200000,
						"conversions": 12,
						"participations": 240,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.04812715349560965
					},
					{
						"time": 1487692800000,
						"conversions": 12,
						"participations": 240,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.04813956056089213
					},
					{
						"time": 1487696400000,
						"conversions": 11,
						"participations": 239,
						"conversion_rate": 0.04602510460251046,
						"cumulative_conversion_rate": 0.048125702690103384
					},
					{
						"time": 1487700000000,
						"conversions": 19,
						"participations": 398,
						"conversion_rate": 0.04773869346733668,
						"cumulative_conversion_rate": 0.04812152448121525
					},
					{
						"time": 1487703600000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.048116144267926146
					},
					{
						"time": 1487707200000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.04811087805007567
					},
					{
						"time": 1487710800000,
						"conversions": 19,
						"participations": 400,
						"conversion_rate": 0.0475,
						"cumulative_conversion_rate": 0.04810445839791924
					},
					{
						"time": 1487714400000,
						"conversions": 20,
						"participations": 399,
						"conversion_rate": 0.05012531328320802,
						"cumulative_conversion_rate": 0.04812542249493006
					},
					{
						"time": 1487718000000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.04812022336018116
					},
					{
						"time": 1487721600000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.048115129903209375
					},
					{
						"time": 1487725200000,
						"conversions": 15,
						"participations": 319,
						"conversion_rate": 0.047021943573667714,
						"cumulative_conversion_rate": 0.048106319007554514
					},
					{
						"time": 1487728800000,
						"conversions": 15,
						"participations": 320,
						"conversion_rate": 0.046875,
						"cumulative_conversion_rate": 0.04809644351988772
					},
					{
						"time": 1487732400000,
						"conversions": 15,
						"participations": 320,
						"conversion_rate": 0.046875,
						"cumulative_conversion_rate": 0.048086725179641465
					},
					{
						"time": 1487736000000,
						"conversions": 12,
						"participations": 239,
						"conversion_rate": 0.0502092050209205,
						"cumulative_conversion_rate": 0.048099263433684314
					},
					{
						"time": 1487739600000,
						"conversions": 12,
						"participations": 239,
						"conversion_rate": 0.0502092050209205,
						"cumulative_conversion_rate": 0.048111654421701844
					},
					{
						"time": 1487743200000,
						"conversions": 9,
						"participations": 200,
						"conversion_rate": 0.045,
						"cumulative_conversion_rate": 0.04809643739149571
					},
					{
						"time": 1487746800000,
						"conversions": 9,
						"participations": 199,
						"conversion_rate": 0.04522613065326633,
						"cumulative_conversion_rate": 0.04808253844656414
					},
					{
						"time": 1487750400000,
						"conversions": 7,
						"participations": 160,
						"conversion_rate": 0.04375,
						"cumulative_conversion_rate": 0.04806573589296102
					},
					{
						"time": 1487754000000,
						"conversions": 8,
						"participations": 159,
						"conversion_rate": 0.050314465408805034,
						"cumulative_conversion_rate": 0.04807436918990704
					},
					{
						"time": 1487757600000,
						"conversions": 7,
						"participations": 159,
						"conversion_rate": 0.0440251572327044,
						"cumulative_conversion_rate": 0.04805888295569346
					},
					{
						"time": 1487761200000,
						"conversions": 8,
						"participations": 159,
						"conversion_rate": 0.050314465408805034,
						"cumulative_conversion_rate": 0.04806747657728896
					},
					{
						"time": 1487764800000,
						"conversions": 6,
						"participations": 119,
						"conversion_rate": 0.05042016806722689,
						"cumulative_conversion_rate": 0.04807416610914652
					},
					{
						"time": 1487768400000,
						"conversions": 6,
						"participations": 119,
						"conversion_rate": 0.05042016806722689,
						"cumulative_conversion_rate": 0.048080817707464675
					},
					{
						"time": 1487772000000,
						"conversions": 5,
						"participations": 119,
						"conversion_rate": 0.04201680672268908,
						"cumulative_conversion_rate": 0.048063673081492043
					},
					{
						"time": 1487775600000,
						"conversions": 12,
						"participations": 240,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.04807465154736593
					},
					{
						"time": 1487779200000,
						"conversions": 11,
						"participations": 239,
						"conversion_rate": 0.04602510460251046,
						"cumulative_conversion_rate": 0.04806314454180272
					},
					{
						"time": 1487782800000,
						"conversions": 12,
						"participations": 240,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.0480740031301829
					},
					{
						"time": 1487786400000,
						"conversions": 19,
						"participations": 398,
						"conversion_rate": 0.04773869346733668,
						"cumulative_conversion_rate": 0.04807091443516097
					},
					{
						"time": 1487790000000,
						"conversions": 20,
						"participations": 399,
						"conversion_rate": 0.05012531328320802,
						"cumulative_conversion_rate": 0.04808971242489565
					},
					{
						"time": 1487793600000,
						"conversions": 19,
						"participations": 400,
						"conversion_rate": 0.0475,
						"cumulative_conversion_rate": 0.04808435213379993
					},
					{
						"time": 1487797200000,
						"conversions": 19,
						"participations": 400,
						"conversion_rate": 0.0475,
						"cumulative_conversion_rate": 0.04807908841147593
					}
				]
			},
			{
				"id": "531901a0-c712-4934-a11f-d3eef40be775",
				"participations": 44399,
				"conversions": 2123,
				"conversion_rate": 0.047816392261086964,
				"conversion_rate_hourly": [
					{
						"time": 1487196000000,
						"conversions": 19,
						"participations": 400,
						"conversion_rate": 0.0475,
						"cumulative_conversion_rate": 0.0475
					},
					{
						"time": 1487199600000,
						"conversions": 19,
						"participations": 400,
						"conversion_rate": 0.0475,
						"cumulative_conversion_rate": 0.0475
					},
					{
						"time": 1487203200000,
						"conversions": 20,
						"participations": 399,
						"conversion_rate": 0.05012531328320802,
						"cumulative_conversion_rate": 0.04837364470391994
					},
					{
						"time": 1487206800000,
						"conversions": 16,
						"participations": 319,
						"conversion_rate": 0.050156739811912224,
						"cumulative_conversion_rate": 0.048748353096179184
					},
					{
						"time": 1487210400000,
						"conversions": 15,
						"participations": 319,
						"conversion_rate": 0.047021943573667714,
						"cumulative_conversion_rate": 0.048448557430593356
					},
					{
						"time": 1487214000000,
						"conversions": 15,
						"participations": 320,
						"conversion_rate": 0.046875,
						"cumulative_conversion_rate": 0.04821511358368104
					},
					{
						"time": 1487217600000,
						"conversions": 12,
						"participations": 239,
						"conversion_rate": 0.0502092050209205,
						"cumulative_conversion_rate": 0.048414023372287146
					},
					{
						"time": 1487221200000,
						"conversions": 12,
						"participations": 239,
						"conversion_rate": 0.0502092050209205,
						"cumulative_conversion_rate": 0.04857685009487666
					},
					{
						"time": 1487224800000,
						"conversions": 9,
						"participations": 199,
						"conversion_rate": 0.04522613065326633,
						"cumulative_conversion_rate": 0.048341566690190546
					},
					{
						"time": 1487228400000,
						"conversions": 9,
						"participations": 199,
						"conversion_rate": 0.04522613065326633,
						"cumulative_conversion_rate": 0.04813715792944279
					},
					{
						"time": 1487232000000,
						"conversions": 8,
						"participations": 160,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.048230504227998745
					},
					{
						"time": 1487235600000,
						"conversions": 8,
						"participations": 160,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.04831494184312556
					},
					{
						"time": 1487239200000,
						"conversions": 7,
						"participations": 160,
						"conversion_rate": 0.04375,
						"cumulative_conversion_rate": 0.04810703102761173
					},
					{
						"time": 1487242800000,
						"conversions": 7,
						"participations": 159,
						"conversion_rate": 0.0440251572327044,
						"cumulative_conversion_rate": 0.04793028322440087
					},
					{
						"time": 1487246400000,
						"conversions": 6,
						"participations": 119,
						"conversion_rate": 0.05042016806722689,
						"cumulative_conversion_rate": 0.04800844104457927
					},
					{
						"time": 1487250000000,
						"conversions": 5,
						"participations": 120,
						"conversion_rate": 0.041666666666666664,
						"cumulative_conversion_rate": 0.04781385834824853
					},
					{
						"time": 1487253600000,
						"conversions": 5,
						"participations": 119,
						"conversion_rate": 0.04201680672268908,
						"cumulative_conversion_rate": 0.04764267990074442
					},
					{
						"time": 1487257200000,
						"conversions": 12,
						"participations": 239,
						"conversion_rate": 0.0502092050209205,
						"cumulative_conversion_rate": 0.04778636683063949
					},
					{
						"time": 1487260800000,
						"conversions": 12,
						"participations": 239,
						"conversion_rate": 0.0502092050209205,
						"cumulative_conversion_rate": 0.04791481810115351
					},
					{
						"time": 1487264400000,
						"conversions": 11,
						"participations": 239,
						"conversion_rate": 0.04602510460251046,
						"cumulative_conversion_rate": 0.04781967558457974
					},
					{
						"time": 1487268000000,
						"conversions": 20,
						"participations": 399,
						"conversion_rate": 0.05012531328320802,
						"cumulative_conversion_rate": 0.04799844539448115
					},
					{
						"time": 1487271600000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.04797114517583408
					},
					{
						"time": 1487275200000,
						"conversions": 20,
						"participations": 398,
						"conversion_rate": 0.05025125628140704,
						"cumulative_conversion_rate": 0.04812384317684671
					},
					{
						"time": 1487278800000,
						"conversions": 19,
						"participations": 398,
						"conversion_rate": 0.04773869346733668,
						"cumulative_conversion_rate": 0.04809966882195237
					},
					{
						"time": 1487282400000,
						"conversions": 19,
						"participations": 400,
						"conversion_rate": 0.0475,
						"cumulative_conversion_rate": 0.04806408544726302
					},
					{
						"time": 1487286000000,
						"conversions": 19,
						"participations": 398,
						"conversion_rate": 0.04773869346733668,
						"cumulative_conversion_rate": 0.048045944810197506
					},
					{
						"time": 1487289600000,
						"conversions": 20,
						"participations": 400,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.048149621965777954
					},
					{
						"time": 1487293200000,
						"conversions": 15,
						"participations": 319,
						"conversion_rate": 0.047021943573667714,
						"cumulative_conversion_rate": 0.048103843217103585
					},
					{
						"time": 1487296800000,
						"conversions": 15,
						"participations": 319,
						"conversion_rate": 0.047021943573667714,
						"cumulative_conversion_rate": 0.048061636296930416
					},
					{
						"time": 1487300400000,
						"conversions": 15,
						"participations": 319,
						"conversion_rate": 0.047021943573667714,
						"cumulative_conversion_rate": 0.0480225988700565
					},
					{
						"time": 1487304000000,
						"conversions": 12,
						"participations": 239,
						"conversion_rate": 0.0502092050209205,
						"cumulative_conversion_rate": 0.048082427017744706
					},
					{
						"time": 1487307600000,
						"conversions": 12,
						"participations": 239,
						"conversion_rate": 0.0502092050209205,
						"cumulative_conversion_rate": 0.04813906841987965
					},
					{
						"time": 1487311200000,
						"conversions": 10,
						"participations": 199,
						"conversion_rate": 0.05025125628140704,
						"cumulative_conversion_rate": 0.04818489043933282
					},
					{
						"time": 1487314800000,
						"conversions": 9,
						"participations": 200,
						"conversion_rate": 0.045,
						"cumulative_conversion_rate": 0.048116931612077245
					},
					{
						"time": 1487318400000,
						"conversions": 7,
						"participations": 159,
						"conversion_rate": 0.0440251572327044,
						"cumulative_conversion_rate": 0.04804867813680235
					},
					{
						"time": 1487322000000,
						"conversions": 8,
						"participations": 160,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.048080891456871645
					},
					{
						"time": 1487325600000,
						"conversions": 7,
						"participations": 159,
						"conversion_rate": 0.0440251572327044,
						"cumulative_conversion_rate": 0.04801542990559334
					},
					{
						"time": 1487329200000,
						"conversions": 7,
						"participations": 159,
						"conversion_rate": 0.0440251572327044,
						"cumulative_conversion_rate": 0.04795204795204795
					},
					{
						"time": 1487332800000,
						"conversions": 5,
						"participations": 120,
						"conversion_rate": 0.041666666666666664,
						"cumulative_conversion_rate": 0.047877591312931886
					},
					{
						"time": 1487336400000,
						"conversions": 5,
						"participations": 119,
						"conversion_rate": 0.04201680672268908,
						"cumulative_conversion_rate": 0.04780954239437994
					},
					{
						"time": 1487340000000,
						"conversions": 6,
						"participations": 119,
						"conversion_rate": 0.05042016806722689,
						"cumulative_conversion_rate": 0.047839506172839504
					},
					{
						"time": 1487343600000,
						"conversions": 11,
						"participations": 240,
						"conversion_rate": 0.04583333333333333,
						"cumulative_conversion_rate": 0.04779411764705882
					},
					{
						"time": 1487347200000,
						"conversions": 11,
						"participations": 239,
						"conversion_rate": 0.04602510460251046,
						"cumulative_conversion_rate": 0.04775513966995482
					},
					{
						"time": 1487350800000,
						"conversions": 12,
						"participations": 240,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.047803734103003516
					},
					{
						"time": 1487354400000,
						"conversions": 20,
						"participations": 399,
						"conversion_rate": 0.05012531328320802,
						"cumulative_conversion_rate": 0.04788438098554762
					},
					{
						"time": 1487358000000,
						"conversions": 20,
						"participations": 399,
						"conversion_rate": 0.05012531328320802,
						"cumulative_conversion_rate": 0.047959612957509466
					},
					{
						"time": 1487361600000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.047948550960599155
					},
					{
						"time": 1487365200000,
						"conversions": 20,
						"participations": 400,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.048013245033112585
					},
					{
						"time": 1487368800000,
						"conversions": 19,
						"participations": 398,
						"conversion_rate": 0.04773869346733668,
						"cumulative_conversion_rate": 0.04800489221831524
					},
					{
						"time": 1487372400000,
						"conversions": 20,
						"participations": 400,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.04806408544726302
					},
					{
						"time": 1487376000000,
						"conversions": 20,
						"participations": 400,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.04811986745425731
					},
					{
						"time": 1487379600000,
						"conversions": 15,
						"participations": 319,
						"conversion_rate": 0.047021943573667714,
						"cumulative_conversion_rate": 0.04809520456305894
					},
					{
						"time": 1487383200000,
						"conversions": 15,
						"participations": 319,
						"conversion_rate": 0.047021943573667714,
						"cumulative_conversion_rate": 0.048071625344352616
					},
					{
						"time": 1487386800000,
						"conversions": 15,
						"participations": 319,
						"conversion_rate": 0.047021943573667714,
						"cumulative_conversion_rate": 0.04804905990969742
					},
					{
						"time": 1487390400000,
						"conversions": 11,
						"participations": 239,
						"conversion_rate": 0.04602510460251046,
						"cumulative_conversion_rate": 0.04801697837909537
					},
					{
						"time": 1487394000000,
						"conversions": 11,
						"participations": 240,
						"conversion_rate": 0.04583333333333333,
						"cumulative_conversion_rate": 0.04798276537406972
					},
					{
						"time": 1487397600000,
						"conversions": 10,
						"participations": 199,
						"conversion_rate": 0.05025125628140704,
						"cumulative_conversion_rate": 0.04801185796223497
					},
					{
						"time": 1487401200000,
						"conversions": 10,
						"participations": 199,
						"conversion_rate": 0.05025125628140704,
						"cumulative_conversion_rate": 0.04804021379485874
					},
					{
						"time": 1487404800000,
						"conversions": 7,
						"participations": 160,
						"conversion_rate": 0.04375,
						"cumulative_conversion_rate": 0.04799697656840514
					},
					{
						"time": 1487408400000,
						"conversions": 7,
						"participations": 160,
						"conversion_rate": 0.04375,
						"cumulative_conversion_rate": 0.04795460214517336
					},
					{
						"time": 1487412000000,
						"conversions": 8,
						"participations": 160,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.04797480859471474
					},
					{
						"time": 1487415600000,
						"conversions": 7,
						"participations": 160,
						"conversion_rate": 0.04375,
						"cumulative_conversion_rate": 0.0479334800684764
					},
					{
						"time": 1487419200000,
						"conversions": 5,
						"participations": 119,
						"conversion_rate": 0.04201680672268908,
						"cumulative_conversion_rate": 0.0478907435508346
					},
					{
						"time": 1487422800000,
						"conversions": 6,
						"participations": 119,
						"conversion_rate": 0.05042016806722689,
						"cumulative_conversion_rate": 0.047908882728697116
					},
					{
						"time": 1487426400000,
						"conversions": 6,
						"participations": 119,
						"conversion_rate": 0.05042016806722689,
						"cumulative_conversion_rate": 0.04792676359719979
					},
					{
						"time": 1487430000000,
						"conversions": 11,
						"participations": 240,
						"conversion_rate": 0.04583333333333333,
						"cumulative_conversion_rate": 0.047897127352091076
					},
					{
						"time": 1487433600000,
						"conversions": 12,
						"participations": 240,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.04792648170767173
					},
					{
						"time": 1487437200000,
						"conversions": 11,
						"participations": 240,
						"conversion_rate": 0.04583333333333333,
						"cumulative_conversion_rate": 0.047897665347329775
					},
					{
						"time": 1487440800000,
						"conversions": 20,
						"participations": 400,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.04794482139853081
					},
					{
						"time": 1487444400000,
						"conversions": 19,
						"participations": 400,
						"conversion_rate": 0.0475,
						"cumulative_conversion_rate": 0.047935062798223
					},
					{
						"time": 1487448000000,
						"conversions": 19,
						"participations": 400,
						"conversion_rate": 0.0475,
						"cumulative_conversion_rate": 0.04792572317930553
					},
					{
						"time": 1487451600000,
						"conversions": 20,
						"participations": 398,
						"conversion_rate": 0.05025125628140704,
						"cumulative_conversion_rate": 0.04797435762702958
					},
					{
						"time": 1487455200000,
						"conversions": 19,
						"participations": 400,
						"conversion_rate": 0.0475,
						"cumulative_conversion_rate": 0.04796459266121147
					},
					{
						"time": 1487458800000,
						"conversions": 20,
						"participations": 400,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.04800564772326156
					},
					{
						"time": 1487462400000,
						"conversions": 20,
						"participations": 399,
						"conversion_rate": 0.05012531328320802,
						"cumulative_conversion_rate": 0.048047454275827975
					},
					{
						"time": 1487466000000,
						"conversions": 16,
						"participations": 319,
						"conversion_rate": 0.050156739811912224,
						"cumulative_conversion_rate": 0.04808019854980777
					},
					{
						"time": 1487469600000,
						"conversions": 15,
						"participations": 319,
						"conversion_rate": 0.047021943573667714,
						"cumulative_conversion_rate": 0.04806402146827679
					},
					{
						"time": 1487473200000,
						"conversions": 15,
						"participations": 320,
						"conversion_rate": 0.046875,
						"cumulative_conversion_rate": 0.0480460638097036
					},
					{
						"time": 1487476800000,
						"conversions": 12,
						"participations": 239,
						"conversion_rate": 0.0502092050209205,
						"cumulative_conversion_rate": 0.04807019181406637
					},
					{
						"time": 1487480400000,
						"conversions": 11,
						"participations": 239,
						"conversion_rate": 0.04602510460251046,
						"cumulative_conversion_rate": 0.048047632234837996
					},
					{
						"time": 1487484000000,
						"conversions": 10,
						"participations": 199,
						"conversion_rate": 0.05025125628140704,
						"cumulative_conversion_rate": 0.04806768808598216
					},
					{
						"time": 1487487600000,
						"conversions": 9,
						"participations": 199,
						"conversion_rate": 0.04522613065326633,
						"cumulative_conversion_rate": 0.048042059463379264
					},
					{
						"time": 1487491200000,
						"conversions": 7,
						"participations": 159,
						"conversion_rate": 0.0440251572327044,
						"cumulative_conversion_rate": 0.048013319533816316
					},
					{
						"time": 1487494800000,
						"conversions": 8,
						"participations": 160,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.04802752088638699
					},
					{
						"time": 1487498400000,
						"conversions": 8,
						"participations": 159,
						"conversion_rate": 0.050314465408805034,
						"cumulative_conversion_rate": 0.04804365184988022
					},
					{
						"time": 1487502000000,
						"conversions": 7,
						"participations": 159,
						"conversion_rate": 0.0440251572327044,
						"cumulative_conversion_rate": 0.04801550592484913
					},
					{
						"time": 1487505600000,
						"conversions": 5,
						"participations": 119,
						"conversion_rate": 0.04201680672268908,
						"cumulative_conversion_rate": 0.04798422436459246
					},
					{
						"time": 1487509200000,
						"conversions": 6,
						"participations": 120,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.0479947689625109
					},
					{
						"time": 1487512800000,
						"conversions": 5,
						"participations": 119,
						"conversion_rate": 0.04201680672268908,
						"cumulative_conversion_rate": 0.04796391864347977
					},
					{
						"time": 1487516400000,
						"conversions": 12,
						"participations": 239,
						"conversion_rate": 0.0502092050209205,
						"cumulative_conversion_rate": 0.047986951669671214
					},
					{
						"time": 1487520000000,
						"conversions": 12,
						"participations": 239,
						"conversion_rate": 0.0502092050209205,
						"cumulative_conversion_rate": 0.04800951693078982
					},
					{
						"time": 1487523600000,
						"conversions": 11,
						"participations": 240,
						"conversion_rate": 0.04583333333333333,
						"cumulative_conversion_rate": 0.047987550994658706
					},
					{
						"time": 1487527200000,
						"conversions": 20,
						"participations": 399,
						"conversion_rate": 0.05012531328320802,
						"cumulative_conversion_rate": 0.04802283256121773
					},
					{
						"time": 1487530800000,
						"conversions": 19,
						"participations": 400,
						"conversion_rate": 0.0475,
						"cumulative_conversion_rate": 0.048014322916666664
					},
					{
						"time": 1487534400000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.04800800800800801
					},
					{
						"time": 1487538000000,
						"conversions": 20,
						"participations": 399,
						"conversion_rate": 0.05012531328320802,
						"cumulative_conversion_rate": 0.0480413021202806
					},
					{
						"time": 1487541600000,
						"conversions": 20,
						"participations": 398,
						"conversion_rate": 0.05025125628140704,
						"cumulative_conversion_rate": 0.04807543069998448
					},
					{
						"time": 1487545200000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.04806847273699897
					},
					{
						"time": 1487548800000,
						"conversions": 19,
						"participations": 398,
						"conversion_rate": 0.04773869346733668,
						"cumulative_conversion_rate": 0.04806353268847153
					},
					{
						"time": 1487552400000,
						"conversions": 16,
						"participations": 319,
						"conversion_rate": 0.050156739811912224,
						"cumulative_conversion_rate": 0.04808836655757215
					},
					{
						"time": 1487556000000,
						"conversions": 15,
						"participations": 320,
						"conversion_rate": 0.046875,
						"cumulative_conversion_rate": 0.04807409585416054
					},
					{
						"time": 1487559600000,
						"conversions": 15,
						"participations": 320,
						"conversion_rate": 0.046875,
						"cumulative_conversion_rate": 0.04806015693112467
					},
					{
						"time": 1487563200000,
						"conversions": 11,
						"participations": 239,
						"conversion_rate": 0.04602510460251046,
						"cumulative_conversion_rate": 0.04804264054453128
					},
					{
						"time": 1487566800000,
						"conversions": 12,
						"participations": 239,
						"conversion_rate": 0.0502092050209205,
						"cumulative_conversion_rate": 0.04806112975790902
					},
					{
						"time": 1487570400000,
						"conversions": 10,
						"participations": 200,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.04807487768559881
					},
					{
						"time": 1487574000000,
						"conversions": 9,
						"participations": 199,
						"conversion_rate": 0.04522613065326633,
						"cumulative_conversion_rate": 0.04805491990846682
					},
					{
						"time": 1487577600000,
						"conversions": 7,
						"participations": 159,
						"conversion_rate": 0.0440251572327044,
						"cumulative_conversion_rate": 0.048032488446996216
					},
					{
						"time": 1487581200000,
						"conversions": 8,
						"participations": 159,
						"conversion_rate": 0.050314465408805034,
						"cumulative_conversion_rate": 0.048045120635031156
					},
					{
						"time": 1487584800000,
						"conversions": 7,
						"participations": 159,
						"conversion_rate": 0.0440251572327044,
						"cumulative_conversion_rate": 0.04802299009763867
					},
					{
						"time": 1487588400000,
						"conversions": 7,
						"participations": 160,
						"conversion_rate": 0.04375,
						"cumulative_conversion_rate": 0.04799944907375525
					},
					{
						"time": 1487592000000,
						"conversions": 5,
						"participations": 119,
						"conversion_rate": 0.04201680672268908,
						"cumulative_conversion_rate": 0.04797503514968623
					},
					{
						"time": 1487595600000,
						"conversions": 5,
						"participations": 120,
						"conversion_rate": 0.041666666666666664,
						"cumulative_conversion_rate": 0.04794918206345412
					},
					{
						"time": 1487599200000,
						"conversions": 6,
						"participations": 120,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.0479575524642019
					},
					{
						"time": 1487602800000,
						"conversions": 11,
						"participations": 240,
						"conversion_rate": 0.04583333333333333,
						"cumulative_conversion_rate": 0.047940352889578625
					},
					{
						"time": 1487606400000,
						"conversions": 11,
						"participations": 240,
						"conversion_rate": 0.04583333333333333,
						"cumulative_conversion_rate": 0.04792342960409625
					},
					{
						"time": 1487610000000,
						"conversions": 11,
						"participations": 239,
						"conversion_rate": 0.04602510460251046,
						"cumulative_conversion_rate": 0.047908366533864544
					},
					{
						"time": 1487613600000,
						"conversions": 20,
						"participations": 399,
						"conversion_rate": 0.05012531328320802,
						"cumulative_conversion_rate": 0.04793735050296537
					},
					{
						"time": 1487617200000,
						"conversions": 20,
						"participations": 399,
						"conversion_rate": 0.05012531328320802,
						"cumulative_conversion_rate": 0.04796558638980529
					},
					{
						"time": 1487620800000,
						"conversions": 19,
						"participations": 400,
						"conversion_rate": 0.0475,
						"cumulative_conversion_rate": 0.04795963982374354
					},
					{
						"time": 1487624400000,
						"conversions": 19,
						"participations": 398,
						"conversion_rate": 0.04773869346733668,
						"cumulative_conversion_rate": 0.04795686719636776
					},
					{
						"time": 1487628000000,
						"conversions": 19,
						"participations": 400,
						"conversion_rate": 0.0475,
						"cumulative_conversion_rate": 0.04795117698343505
					},
					{
						"time": 1487631600000,
						"conversions": 19,
						"participations": 400,
						"conversion_rate": 0.0475,
						"cumulative_conversion_rate": 0.04794562676836019
					},
					{
						"time": 1487635200000,
						"conversions": 20,
						"participations": 398,
						"conversion_rate": 0.05025125628140704,
						"cumulative_conversion_rate": 0.047973506714468005
					},
					{
						"time": 1487638800000,
						"conversions": 16,
						"participations": 319,
						"conversion_rate": 0.050156739811912224,
						"cumulative_conversion_rate": 0.047994463334637257
					},
					{
						"time": 1487642400000,
						"conversions": 15,
						"participations": 319,
						"conversion_rate": 0.047021943573667714,
						"cumulative_conversion_rate": 0.047985216976633285
					},
					{
						"time": 1487646000000,
						"conversions": 15,
						"participations": 319,
						"conversion_rate": 0.047021943573667714,
						"cumulative_conversion_rate": 0.04797614478462402
					},
					{
						"time": 1487649600000,
						"conversions": 11,
						"participations": 239,
						"conversion_rate": 0.04602510460251046,
						"cumulative_conversion_rate": 0.047962474347698625
					},
					{
						"time": 1487653200000,
						"conversions": 11,
						"participations": 239,
						"conversion_rate": 0.04602510460251046,
						"cumulative_conversion_rate": 0.04794899414830126
					},
					{
						"time": 1487656800000,
						"conversions": 10,
						"participations": 200,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.04796086717415844
					},
					{
						"time": 1487660400000,
						"conversions": 9,
						"participations": 199,
						"conversion_rate": 0.04522613065326633,
						"cumulative_conversion_rate": 0.04794520547945205
					},
					{
						"time": 1487664000000,
						"conversions": 7,
						"participations": 160,
						"conversion_rate": 0.04375,
						"cumulative_conversion_rate": 0.04792597685344334
					},
					{
						"time": 1487667600000,
						"conversions": 8,
						"participations": 159,
						"conversion_rate": 0.050314465408805034,
						"cumulative_conversion_rate": 0.047936806684347105
					},
					{
						"time": 1487671200000,
						"conversions": 7,
						"participations": 159,
						"conversion_rate": 0.0440251572327044,
						"cumulative_conversion_rate": 0.047919150627377505
					},
					{
						"time": 1487674800000,
						"conversions": 8,
						"participations": 159,
						"conversion_rate": 0.050314465408805034,
						"cumulative_conversion_rate": 0.047929913805284725
					},
					{
						"time": 1487678400000,
						"conversions": 5,
						"participations": 119,
						"conversion_rate": 0.04201680672268908,
						"cumulative_conversion_rate": 0.047910094637223975
					},
					{
						"time": 1487682000000,
						"conversions": 5,
						"participations": 119,
						"conversion_rate": 0.04201680672268908,
						"cumulative_conversion_rate": 0.047890407882547795
					},
					{
						"time": 1487685600000,
						"conversions": 5,
						"participations": 119,
						"conversion_rate": 0.04201680672268908,
						"cumulative_conversion_rate": 0.0478708522186783
					},
					{
						"time": 1487689200000,
						"conversions": 11,
						"participations": 240,
						"conversion_rate": 0.04583333333333333,
						"cumulative_conversion_rate": 0.047857261964315494
					},
					{
						"time": 1487692800000,
						"conversions": 11,
						"participations": 239,
						"conversion_rate": 0.04602510460251046,
						"cumulative_conversion_rate": 0.04784517268987604
					},
					{
						"time": 1487696400000,
						"conversions": 12,
						"participations": 239,
						"conversion_rate": 0.0502092050209205,
						"cumulative_conversion_rate": 0.04786066922654964
					},
					{
						"time": 1487700000000,
						"conversions": 19,
						"participations": 400,
						"conversion_rate": 0.0475,
						"cumulative_conversion_rate": 0.04785675529028757
					},
					{
						"time": 1487703600000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.047854209721141204
					},
					{
						"time": 1487707200000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.047851718094428806
					},
					{
						"time": 1487710800000,
						"conversions": 20,
						"participations": 399,
						"conversion_rate": 0.05012531328320802,
						"cumulative_conversion_rate": 0.04787555508842
					},
					{
						"time": 1487714400000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.04787289369669232
					},
					{
						"time": 1487718000000,
						"conversions": 19,
						"participations": 400,
						"conversion_rate": 0.0475,
						"cumulative_conversion_rate": 0.04786905497220507
					},
					{
						"time": 1487721600000,
						"conversions": 19,
						"participations": 398,
						"conversion_rate": 0.04773869346733668,
						"cumulative_conversion_rate": 0.047867733224639525
					},
					{
						"time": 1487725200000,
						"conversions": 15,
						"participations": 320,
						"conversion_rate": 0.046875,
						"cumulative_conversion_rate": 0.04785970586748876
					},
					{
						"time": 1487728800000,
						"conversions": 15,
						"participations": 319,
						"conversion_rate": 0.047021943573667714,
						"cumulative_conversion_rate": 0.04785300679317173
					},
					{
						"time": 1487732400000,
						"conversions": 16,
						"participations": 320,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.0478700917613707
					},
					{
						"time": 1487736000000,
						"conversions": 12,
						"participations": 239,
						"conversion_rate": 0.0502092050209205,
						"cumulative_conversion_rate": 0.04788391179669732
					},
					{
						"time": 1487739600000,
						"conversions": 11,
						"participations": 240,
						"conversion_rate": 0.04583333333333333,
						"cumulative_conversion_rate": 0.04787181755627642
					},
					{
						"time": 1487743200000,
						"conversions": 9,
						"participations": 199,
						"conversion_rate": 0.04522613065326633,
						"cumulative_conversion_rate": 0.04785894206549118
					},
					{
						"time": 1487746800000,
						"conversions": 9,
						"participations": 199,
						"conversion_rate": 0.04522613065326633,
						"cumulative_conversion_rate": 0.047846191287417864
					},
					{
						"time": 1487750400000,
						"conversions": 7,
						"participations": 159,
						"conversion_rate": 0.0440251572327044,
						"cumulative_conversion_rate": 0.047831462580911054
					},
					{
						"time": 1487754000000,
						"conversions": 7,
						"participations": 160,
						"conversion_rate": 0.04375,
						"cumulative_conversion_rate": 0.04781569224081721
					},
					{
						"time": 1487757600000,
						"conversions": 8,
						"participations": 159,
						"conversion_rate": 0.050314465408805034,
						"cumulative_conversion_rate": 0.04782525019245574
					},
					{
						"time": 1487761200000,
						"conversions": 8,
						"participations": 159,
						"conversion_rate": 0.050314465408805034,
						"cumulative_conversion_rate": 0.04783473530328085
					},
					{
						"time": 1487764800000,
						"conversions": 5,
						"participations": 120,
						"conversion_rate": 0.041666666666666664,
						"cumulative_conversion_rate": 0.04781704781704782
					},
					{
						"time": 1487768400000,
						"conversions": 6,
						"participations": 119,
						"conversion_rate": 0.05042016806722689,
						"cumulative_conversion_rate": 0.04782442929990945
					},
					{
						"time": 1487772000000,
						"conversions": 5,
						"participations": 119,
						"conversion_rate": 0.04201680672268908,
						"cumulative_conversion_rate": 0.04780800760365926
					},
					{
						"time": 1487775600000,
						"conversions": 12,
						"participations": 240,
						"conversion_rate": 0.05,
						"cumulative_conversion_rate": 0.047820437093916125
					},
					{
						"time": 1487779200000,
						"conversions": 12,
						"participations": 239,
						"conversion_rate": 0.0502092050209205,
						"cumulative_conversion_rate": 0.04783385020204868
					},
					{
						"time": 1487782800000,
						"conversions": 11,
						"participations": 239,
						"conversion_rate": 0.04602510460251046,
						"cumulative_conversion_rate": 0.04782375067168189
					},
					{
						"time": 1487786400000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.04782186009906949
					},
					{
						"time": 1487790000000,
						"conversions": 19,
						"participations": 400,
						"conversion_rate": 0.0475,
						"cumulative_conversion_rate": 0.04781890738956929
					},
					{
						"time": 1487793600000,
						"conversions": 19,
						"participations": 398,
						"conversion_rate": 0.04773869346733668,
						"cumulative_conversion_rate": 0.047818181818181815
					},
					{
						"time": 1487797200000,
						"conversions": 19,
						"participations": 399,
						"conversion_rate": 0.047619047619047616,
						"cumulative_conversion_rate": 0.047816392261086964
					}
				]
			}
		]
	}
})
});

app.listen(port);
console.log('server now listening on port ', port);
