import { CardDto } from "./card.dto";

export interface CardDetailedDto extends CardDto {
  rules: string[];
  
}
