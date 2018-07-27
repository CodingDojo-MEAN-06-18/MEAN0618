import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  user1 = {
		email: 'bill@gates.com',
		importance: 'High',
		subject: 'New Windows',
		content: 'Windows XI will launch in year 2100.'
  };
  user2 = {
		email: 'ada@lovelace.com',
		importance: 'High',
		subject: 'Programming',
		content: 'Enchantress of Numbers'
  };
  user3 = {
		email: 'john@carmac.com',
		importance: 'Low',
		subject: 'Updated Algo',
		content: 'New algoritm for shadow volumes.'
  };
  user4 = {
		email: 'gabe@newel.com',
		importance: 'Low',
		subject: 'HL3!',
		content: 'Just kidding...'
	}
}
