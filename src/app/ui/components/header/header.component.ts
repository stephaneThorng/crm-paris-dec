import { Component, OnInit } from '@angular/core';
import { faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title: string;
  public faUser = faUser;
  public faBars = faBars;
  public faTimes = faTimes;
  public open = true;
  constructor() { }

  ngOnInit() {
    this.title = 'CRM-PARIS-DEC';
  }


}
