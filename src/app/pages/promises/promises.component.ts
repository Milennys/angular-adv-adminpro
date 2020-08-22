import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //this.promiseExample();
    this.getUsers().then(users => {
      console.log(users);
    });
  }

  promiseExample() {
    const promise = new Promise((resolve, reject) => {
      if (false) {
        resolve('Hola soy la data q quiero mostrar ');
      } else {
        reject('soy el error q deberia ser capturado');
      }
    });
    promise.then((dataCumplida) => {
      console.log(dataCumplida);
    }).catch((errorObtenido) => {
      console.log(errorObtenido);
    });
    console.log('finalice el promiseExample')
  }

  getUsers() {
    //primer ejemplo
    // fetch('https://reqres.in/api/users').then(
    //   (response) => {
    //     response.json().then(body => console.log(body));
    //   });
    // segundo ejemplo
    // fetch('https://reqres.in/api/users')
    //   .then(response => response.json()
    //     .then(body => console.log(body.data)));
    // tercer ejemplo
    const promise = new Promise(resolve => {
      fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(body => resolve(body.data));
    });
    return promise;
  }

}
