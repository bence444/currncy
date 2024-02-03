import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CardDto } from '../../../shared/models/card.dto';
import { HomeService } from '../../../core/api/home.service';
import { SearchResultDto } from '../../../shared/models/search-result.dto';
import { PaginatorDto } from '../../../shared/models/paginator.dto';
import { HomeCardComponent } from '../home-card/home-card.component';

@Component({
  selector: 'app-home-search',
  standalone: true,
  imports: [MatGridListModule, FormsModule, ReactiveFormsModule, MatPaginatorModule, HomeCardComponent],
  templateUrl: './home-search.component.html',
  styleUrl: './home-search.component.scss'
})
export class HomeSearchComponent implements OnInit {

  name: string = '';
  pokeCards: CardDto[] = [];
  cols: number = 12;

  paginator: PaginatorDto = {
    page: 1,
    pageSize: parseFloat(localStorage.getItem('pageSize') ?? '50') ?? 50,
    count : 0,
    totalCount: 0
  }

  constructor(private service: HomeService, observer: BreakpointObserver) {
    observer.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.cols = 3;
        } else if (result.breakpoints[Breakpoints.Small]) {
          this.cols = 6;
        } else {
          this.cols = 9;
        }
      } else {
        this.cols = 12;
      }
    });
  }

  ngOnInit(): void {
    this.service.getSearchResult(this.paginator).subscribe({
      next: (_result: any) => {
        const result = (_result as SearchResultDto<CardDto>);
        this.pokeCards = result.data;
        
        this.paginator.page = result.page;
        this.paginator.count = result.count;
        this.paginator.totalCount = result.totalCount;
      }
    });
  }

  searchName() {
    this.service.getSearchResult(this.paginator).subscribe({});
  }
}
