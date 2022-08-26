// Mitarbeiter- Objekte

const Mitarbeiter1 = {
    name: "Henry",
    duration: 2,
    job: "Human Resources",
    position: "Junior"
}

const Mitarbeiter2 = {
    name: "Oscar",
    duration: 8,
    job: "Marketing",
    position: "Team Leader"
}

const Mitarbeiter3 = {
    name: "Paula",
    duration: 6,
    job: "Production",
    position: "Senior"
}

const Mitarbeiter4 = {
    name: "Lenny",
    duration: 3,
    job: "Marketing",
    position: "Junior"
}

const Mitarbeiter5 = {
    name: "Frederike",
    duration: 1,
    job: "Human Resources",
    position: "Junior"
}

const Mitarbeiter6 = {
    name: "Noamie",
    duration: 10,
    job: "Human Resources",
    position: "Senior"
}

const Mitarbeiter7 = {
    name: "Greg",
    duration: 2,
    job: "Production",
    position: "Team Leader"
}

const Mitarbeiter8 = {
    name: "Simone",
    duration: 2,
    job: "Production",
    position: "Senior"
}

const Mitarbeiter9 = {
    name: "Paola",
    duration: 10,
    job: "Human Resources",
    position: "Team Leader"
}

const Mitarbeiter = [Mitarbeiter1, Mitarbeiter2, Mitarbeiter3, Mitarbeiter4, Mitarbeiter5, Mitarbeiter6, Mitarbeiter7, Mitarbeiter8, Mitarbeiter9]


const addElementEmployees = (employee) => {
    document.write(`<span class='employees'> <b> ${employee.name} </b>  arbeitet seit  <b> ${employee.duration} </b> Jahren bei uns. Er / Sie arbeitet in der Abteilung  <b> ${employee.job} </b>  in der Position  <b> ${employee.position} </b> <br>  </span>`)
}

Mitarbeiter.map(addElementEmployees)