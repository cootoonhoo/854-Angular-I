import { FeaturesSectionData } from './../../models/features-section-data.model';
import { FeatureData } from './../../models/feature-data.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  @Input() featureData!:FeaturesSectionData;

  constructor() { }

  ngOnInit() {
  }

}
