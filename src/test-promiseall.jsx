Promise.all(promise1, promise2)

promise1 = fetch(url/1)
promise2 = fetch(url/2)


const urlList = [];
for(let i=1; i<11; i++){
	urlList.push(`https://swapi.dev/api/people/?page=${i}`); //https://swapi.dev/api/people/?page=1
}

Promise.all(urlList.map(url=>{						
	return fetch(url).then(resp=>resp.json())		
}))
.then(pages => pages.map(page => {
	page.results.map(person =>{
		console.log(person)
	})
}))
.catch(err => console.log('error, fix it!', err));

