import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-campaigns',
  standalone: true,
  imports: [
    NgFor,
    CommonModule
  ],
  templateUrl: './campaigns.component.html',
  styleUrl: './campaigns.component.css'
})
export class CampaignsComponent {
  items = [
    { /* Podaci za karticu 1 */ },
    { /* Podaci za karticu 2 */ },
    { /* Podaci za karticu 2 */ },
    { /* Podaci za karticu 2 */ },
    { /* Podaci za karticu 2 */ },
    { /* Podaci za karticu 2 */ },
    { /* Podaci za karticu 2 */ },
    { /* Podaci za karticu 2 */ },
    { /* Podaci za karticu 2 */ },
  ];

}
