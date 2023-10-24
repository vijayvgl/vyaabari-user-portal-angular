export class PaginationDTO {
	limit: number = 10;
	offset: number = 1;
	sortByKey: string;
	sortByType: string;
	searchWith: string;
	vehicleType: string;
	fuelType: string;
	filterType: string;
	totalSize: number = 0; 
}
