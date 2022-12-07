import { FeaturesSectionData } from './../../models/features-section-data.model';
import { FeatureData } from './../../models/feature-data.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  @Input() featureData!:FeaturesSectionData;
  @Output() public elementCreated: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.elementCreated.emit('Feature');
  }

}
