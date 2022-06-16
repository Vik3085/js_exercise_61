const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

// core here
function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (persons) {
        resolve(persons.filter(item => item.id === id));
      } else {
        reject('Errore person id');
      }
    }, 1000);
  })
}

function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (jobs) {
        resolve(jobs.filter(item => item.id === id));
      } else {
        reject('Errore job id');
      }
    }, 500);
  })
}


async function result() {
  let personPromise = await fetchPersonById(1);
  console.log(personPromise);

  let jobPromise = await fetchJobById(1);
  console.log(jobPromise);
}

result();