import { Injectable }    from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { AgencyPortfolioStore } from '../store/agencyportfolio.store';
//import { Headers, Http } from '@angular/http';
//import 'rxjs/add/operator/toPromise';

//import { HEROES } from './mock-heroes';
//import { Hero } from './hero';

@Injectable()
export class AgencyService {
	private agencyAnnouncedSource = new Subject<string>();
	agencyAnnounced$ = this.agencyAnnouncedSource.asObservable();
  
	private agencyPortfolioStore = new AgencyPortfolioStore().extjsObject;

	getAgencyPortfolioStore() {
		return this.agencyPortfolioStore;
	}


	announceAgency(agency: string) {
    this.agencyAnnouncedSource.next(agency);
  }

	agency: any = '';

	// setAgency(agency) {
	// 	this.agency = agency;
	// }

	// getAgency() {
	// 	return this.agency;
	// }


}
