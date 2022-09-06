import { Component, OnInit } from '@angular/core';
import { Fan } from 'src/app/models/fan';
import { RandomUserService } from 'src/app/random-user.service';

@Component({
  selector: 'app-fan-list',
  templateUrl: './fan-list.component.html',
  styleUrls: ['./fan-list.component.css']
})
export class FanListComponent implements OnInit {

  fanName: string = '';
  fanAge: number = 0;
  fanCountry: string = '';

  fanTeam: string = '';

  defaultImage: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLeqFP02VCsY42ISqgB9R8yyJVedXe2lMgpmvM4tXVHw&s";

  barcelonaFans: Array<Fan> = [];
  madridFans: Array<Fan> = []

  constructor(private randomUserService: RandomUserService) { }

  ngOnInit(): void {

    this.madridFans.push(new Fan("John Doe", 30, "United States", this.defaultImage));
    this.madridFans.push(new Fan("Manuel García", 30, "Spain", this.defaultImage));
    this.madridFans.push(new Fan("Lucia Martin ", 25, "Spain", this.defaultImage));

    this.barcelonaFans.push(new Fan("Maite Cardozo", 33, "Venezuela", this.defaultImage));
    this.barcelonaFans.push(new Fan("Cesar Bianco", 31, "Italy", this.defaultImage));
    this.barcelonaFans.push(new Fan("Akira Yamaoka", 38, "Japan", this.defaultImage));

  }

  addFan(): void {

    let fan: Fan = new Fan(this.fanName, this.fanAge, this.fanCountry, this.defaultImage);

    if(this.fanTeam === 'barcelona') {
      this.barcelonaFans.push(fan);

    } else if(this.fanTeam === 'madrid') {
      this.madridFans.push(fan);

    }
    
  }

  changeTeam(index: number, team: string) {
    if (team==='barcelona') {
      let fan : Fan = this.barcelonaFans.splice(index, 1)[0];
      this.madridFans.push(fan);
    } else {
      let fan: Fan = this.madridFans.splice(index, 1)[0];
      this.barcelonaFans.push(fan);
    }

  }

  deleteFan(index: number, team: string) {
    if(team ==='barcelona') {
      this.barcelonaFans.splice(index, 1);
    } else {
      this.madridFans.splice(index, 1);
    }

  }

  addRandomFan() {
    this.randomUserService.getRandomUser().subscribe(result => {
      console.log(result);
      const name: string = `${result.results[0].name.title} ${result.results[0].name.first} ${result.results[0].name.last}`;
      // const name2: string = result.results[0].name.title + " " + result.results[0].name.first + " " + result.results[0].name.last;
      const age: number = result.results[0].dob.age;
      const country: string = result.results[0].location.country;
      const profilePicture: string = result.results[0].picture.medium;

      const fan: Fan = new Fan(name, age, country, profilePicture);

      if(this.fanTeam==="barcelona") {
        this.barcelonaFans.push(fan);
      } else {
        this.madridFans.push(fan);
      }
      
    });

  }

}
