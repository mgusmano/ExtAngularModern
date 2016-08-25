import { Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';
import { AgencyService }  from '../../service/agency.service';

@Component({
	selector: 'detail',
	styleUrls: ['app/view/main/detail.component.css'],
	templateUrl: 'app/view/main/detail.component.html',
	changeDetection: ChangeDetectionStrategy.Default
})
export class DetailComponent implements OnInit{ 
	subscription: Subscription;
	agency: any;
	constructor(private agencyService: AgencyService) {

		this.subscription = agencyService.agencyAnnounced$.subscribe(agency => {
				this.agency = agency;
		});

	}

	ngOnInit():any {
		this.agency = this.agencyService.agency;
	}
}
