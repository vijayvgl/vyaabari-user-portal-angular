export class PaginationDTO {
	limit: number = 10;
	id: String;
	offset: number = 1;
	sortByKey: string;
	sortByType: string;
	searchWith: string;
	filterByType: string;
	filterType: string;
	totalSize: number = 0; // total items in the mysql table
	filterByStatus: any;
    from_date: string;
    todate: string;
}