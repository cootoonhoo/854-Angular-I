import { AddressSectionData } from './../../models/address-section-data.model';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { AddressData } from 'src/app/models/address-data.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input() addressData!: AddressSectionData;
  @Output() public elementCreated: EventEmitter<string> = new EventEmitter<string>();


  // public addressData: AddressData = {
  //   street: "Rua Luiz Galvez",
  //   number: 254,
  //   complement: "3º andar, sala 306",
  //   state: "AC",
  //   city: "Rio Branco",
  //   district: "Conjunto Castelo Branco",
  //   zipCode: "69911-262"
  // }

  constructor() { }

  ngOnInit() {
    this.elementCreated.emit('Adress');
  }

}
