function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let input = document.querySelector('#inputs>textarea').value;

      const bestRestaurantOutput = document.querySelector('#bestRestaurant>p');
      const bestWorkers = document.querySelector('#workers>p');

      const arr = JSON.parse(input);

      let restaurants = {};

      arr.forEach((line) =>{
         const tokens = line.split(' - ');
         const  name = tokens[0];
         const workersArray = tokens[1].split(', ');

         let workers = [];

         for (const worker of workersArray) {
            const workerTokens = worker.split(' ');
            let salary = Number(workerTokens[1])
            workers.push({
               name: workerTokens[0],
               salary
            })
         }

         let averageSalary = 0;
         let bestSalary = 0;

         if (restaurants[name] !== undefined){ //check if the entry already exists
            workers = workers.concat(restaurants[name].workers); //go concatenate the current workers with the existing rest workers
         }

         workers.sort ((a, b) => b.salary-a.salary);
         bestSalary = workers[0].salary;
         averageSalary = workers.reduce((acc, worker) => acc + worker.salary, 0)/workers.length; //

         restaurants[name] = {   //add the restaurant
            workers,
            averageSalary,
            bestSalary
         }
      })

      let bestRestaurantSalary = 0;
      let bestRestaurant = undefined;

      for (const name in restaurants){
         if (restaurants[name].averageSalary >= bestRestaurantSalary){
            bestRestaurant = {   //change the best rest
               name,
               workers: restaurants[name].workers,
               bestSalary: restaurants[name].bestSalary,
               averageSalary: restaurants[name].averageSalary
            }
            bestRestaurantSalary = restaurants[name].averageSalary;
         }
      }

      let toAttach = [];

      bestRestaurantOutput.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`
      bestRestaurant.workers.forEach((worker)=>{
         toAttach.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
      })
      bestWorkers.textContent = toAttach.join(' ');
   }

}