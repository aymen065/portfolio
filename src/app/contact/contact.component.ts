import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as L from 'leaflet';
import emailjs from 'emailjs-com';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit() {
    const map = L.map('map').setView([36.834391, 9.942631], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const icon = L.divIcon({
      className: 'custom-icon',
      html: '<i class="fas fa-map-marker-alt"></i>',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    });

    L.marker([36.834391, 9.942631], { icon: icon }).addTo(map)
      .bindPopup('Jedaida-Mannouba')
      .openPopup();
  }

  onSubmit() {

      const formData = this.contactForm.value;

      emailjs.send('gmail', 'template_exx4pat', formData, 'DpPdpxQ--5M-syP4t')
        .then((response) => {
          alert('Message sent successfully!');
        }, (error) => {
          alert('Error sending message.');
        });
    
  }

}
