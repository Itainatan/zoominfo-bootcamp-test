import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { FilterOptions, Wand } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  searchQuery = {
    term: '',
    wood: 'All',
    length: 'All',
    core: 'All',
    flexibility: 'All'
  };
  wands?: Observable<Wand[]>;
  options?: Observable<FilterOptions>;
  selected?: Wand;


  constructor(private readonly http: HttpClient) {
  }

  ngOnInit() {
    this.options = forkJoin({
      core: this.http.get('/api/options/core'),
      length: this.http.get('/api/options/length'),
      wood: this.http.get('/api/options/wood')
    }) as Observable<FilterOptions>;
    this.fetchWands();
  }

  fetchWands() {
    /**
     * Task Client/1:
     * Fix me
     */
    const {wood, term, core, length} = this.searchQuery;
    this.wands = this.http.get<Wand[]>('/api/wands');
  }

  filterSearch(e: { [key: string]: string } | any) {
    this.searchQuery = {...this.searchQuery, ...e};
    this.fetchWands();
  }
}
