(function () {
	var $chatline=document.getElementById("chatline");
	//補完対象の文字列
	var wordsArray=Object.keys(SoundFiltersArray);
	//二分探索のためにソート
	wordsArray.sort();
	
	$chatline.addEventListener("keydown",function (event) {
		if (event.code!="Tab") {return;}
		//ここ以下Tabキーが押されたときのみ実行
		var oldchat=$chatline.value;
		var newchat=oldchat;
		for(var i=0;i<oldchat.length;i++){
			var searchResult=wordSearch(oldchat.substring(i));
			if (searchResult.foundString) {//ただ一つ見つかったものがあれば
				newchat+=searchResult.foundString.substring(oldchat.length-i);
			}
			if (!searchResult.keepSearch) {
				break;
			}
		}
		$chatline.value=newchat;
	});
	
	function wordSearch(key){
		var index=Math.floor(wordsArray.length/2);//配列内の今見ている位置
		var diff=Math.floor(wordsArray.length/2);//大小によって移動する幅
		while (true){
			diff= diff/2<1 ? 1 : Math.floor(diff/2);
			if(wordsArray[index-1]>=key){
				index-=diff;
			}else if(wordsArray[index]<key){
				index+=diff;
			}else{
				//indexが、key以上の最小の文字列を示すようになったら
				break;
			}
			if(index>=wordsArray.length){
				//どの単語よりもkeyが大きかったら
				return {keepSearch:true,foundString:""};
			}
		}
		if(wordsArray[index].indexOf(key)==0){
			if(index==wordsArray.length-1||wordsArray[index+1].indexOf(key)!=0){
				//ただ一つ合致するものが見つかったら
				return {keepSearch:false,foundString:wordsArray[index]};
			}else{
				//ニつ以上合致するものが見つかったら
				return {keepSearch:false,foundString:""};
			}
		}else{
			return {keepSearch:true,foundString:""};
		}
	}
})();