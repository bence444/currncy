import { PaginatorDto } from "./paginator.dto";

export interface SearchResultDto<T> extends PaginatorDto {
  data: T[];
}
