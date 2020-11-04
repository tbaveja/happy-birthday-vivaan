var data = [];

var dataStr = "Maa ka Pyaar<br>\
<br>\
Maa Ka Pyaar<br>\
<br>\
<br>\
2<br>\
<br>\
Japanese Cartoon<br>\
<br>\
<br>\
3<br>\
<br>\
Japanese Cartoon<br>\
<br>\
<br>\
4<br>\
<br>\
American Movie<br>\
<br>\
<br>\
5<br>\
<br>\
American TV Series<br>\
<br>\
<br>\
6<br>\
<br>\
American Movie<br>\
<br>\
<br>\
7<br>\
<br>\
American Movie<br>\
<br>\
<br>\
8<br>\
<br>\
Japanese Cartoon<br>\
<br>\
<br>\
9<br>\
<br>\
Japanese Cartoon<br>\
<br>\
<br>\
11<br>\
<br>\
American Movie<br>\
<br>\
<br>\
12<br>\
<br>\
American TV Series<br>\
<br>\
<br>\
13<br>\
<br>\
American Movie<br>\
<br>\
<br>\
14<br>\
<br>\
American Movie<br>\
15<br>\
<br>\
Japanese Cartoon<br>\
<br>\
<br>\
16<br>\
<br>\
Japanese Cartoon<br>\
<br>\
<br>\
17<br>\
<br>\
Japanese Cartoon<br>\
<br>\
<br>\
18<br>\
<br>\
American Movie<br>\
<br>\
<br>\
19<br>\
<br>\
American TV Series<br>\
<br>\
<br>\
20<br>\
<br>\
American Movie"

caption = ["Maa Ka Pyaar", "Koi shaitni ki jaaye", "Natkhat Kanha", "Kahi main dikh to nahi raha", 
				"papa ka office (jo pehle mummy ka bhi tha :P)", "mujhe gussa mat dilao", "Chhote Gandhi Ji", 
				"meet my friend, Monku :P", "Drinks Break :P", "papa ki kuch help kari jaaye aaj", "aage shayad traffic lag gaya",
				 "study time", "Party Time", "Let me Dance !", "My new friend circle", "Chulbul Pandey", "Shopping ki jaaye", "Mera Teddy",
				 "MaSTi TiME" ];


desc = ["Happy Birthday Vivaan", "God Bless You", "Stay Blessed", "Wish you all the happiness, success and joy", "Happy Birthday Vivaan", "God Bless You", "Stay Blessed", "Wish you all the happiness, success and joy",
"Happy Birthday Vivaan", "God Bless You", "Stay Blessed", "Wish you all the happiness, success and joy", "Happy Birthday Vivaan", "God Bless You", "Stay Blessed", "Wish you all the happiness, success and joy",
"Happy Birthday Vivaan", "God Bless You", "Wish you all the happiness, success and joy"]

var d = dataStr.split("<br><br><br>");
for(var i = 0; i<d.length; i++){
  var c1 = d[i].split("<br><br>");
  console.log(c1);
  data.push({
    img: c1[0]+ ".jpg",
    caption: caption[i],
    desc: caption[i]
  });
}