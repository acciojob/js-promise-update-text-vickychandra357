//your JS code here. If required.
 const myPromise=new Promise((resolve,reject)=>{
	 setTimeout(()=>{
		 resolve("Hello, world!");
	 },1000)
 });
// document.getElementById("output").innerHtml=myPromise;

myPromise.then(res=>{
	console.log("res>>>>",res);
	document.getElementById('output').innerHTML=res;
})