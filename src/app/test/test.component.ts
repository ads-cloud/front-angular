import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  poke: Pok[] = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Pet>(environment.url).subscribe(data => {
      this.poke = data.results
      console.log(data);
      
    
    }, error => { console.error(error) })
  }

}

interface Pet {
  count: number,
  next: string,
  previous: string,
  results: Array<Pok>
}

interface Pok {
  nombre: string
  url: string
}
