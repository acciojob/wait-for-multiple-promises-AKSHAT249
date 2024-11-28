function randomTime(){
	return (Math.floor(Math.random() * 3)) + 1
}

const promise1 = () => {
	let time = randomTime();
	return (
		new Promise(  (resolve, reject) => {
			setTimeout( ( ) => {
				resolve("Promise 1" + `${time}`)
			}, time*1000 )
		} )
	)
}


const promise2 = () => {
	let time = randomTime();
	return (
		new Promise(  (resolve, reject) => {
			setTimeout( ( ) => {
				resolve("Promise 2" + `${time}`)
			}, time*1000 )
		} )
	)
}

const promise3 = () => {
	let time = randomTime();
	return (
		new Promise(  (resolve, reject) => {
			setTimeout( ( ) => {
				resolve("Promise 3" + `${time}`)
			}, time*1000 )
		} )
	)
}

let outputTable = document.getElementById("output")
outputTable.innerHTML += `
	<tr>
		<td>Loading...</td>
		<td>Loading...</td>
	</tr>
`


Promise.all([promise1(), promise2(), promise3()]).then(
	(data) =>{
		let totaltime = 0;
		outputTable.innerHTML = ''
		data.map( (item)=> {
			totaltime += parseInt(item.slice(-1))
			outputTable.innerHTML += `
				<tr>
					<td>${item.slice(0,item.length-1)}</td>
					<td>${item.slice(-1)}</td>

				</tr>
			
			`

		} )

		outputTable.innerHTML += `
			<tr>
				<td>Total</td>
				<td>${totaltime}</td>
			</tr>
		
		`
		
		

		
	}
)
