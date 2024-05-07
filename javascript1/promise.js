'use strict';

//Promise is a javascript object for asynchronous operation.
//State; pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log('doing something...');
  setTimeout(() => {
    //resove( 'ellie');
    reject(new Error('no network'));
  }, 2000);
});

//2. Consumers: then, catch, finally
promise ///
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  });
  .finally(() => {
    console.log('finally');
  });

  //3. promise chaining
  const fetchNumber = new Promise((resolve, rejcet) =>{
    setTimeout(() => resolve(1), 1000);
  });
  fetchNumber
    .then(num => num *2)
    .then(num => num *3)
    .then(num => {
      return new Promise((resolve, rejcet) =>{
      setTimeout(() => resolve(num - 1), 1000);
      });
    })
    .then(num => console.log(num));

    // 4. Error Handling
    const getHen = () =>
    new Promise((resolve, rejcet))=> {
      setTimeout(() => resolve('닭'), 1000);
    }); 
    const getEgg = hen =>
    new Promise((resolve, rejcet))=> {
      setTimeout(() => reject(new Error(`error! ${hen} =>달걀`)), 1000);
    }); 
    const cook= egg =>
    new Promise((resolve, rejcet))=> {
      setTimeout(() => resolve(`${egg} =>`), 1000);
    }); 

    getHen()
      .then(getEgg)
      .then(cook)
      .catch(console.log);
      .then(console.log)