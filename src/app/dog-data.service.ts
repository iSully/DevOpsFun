import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

export interface Dog {
  name: string;
  ownerName: string;
  description: string;
  longDescription: string;
  photoUrl: string;
  location: string;
}

@Injectable({
  providedIn: 'root'
})
export class DogDataService {

  public dogs: Dog[] = [
    {
      name: 'Buddy',
      ownerName: 'John Doe',
      description: 'A friendly Golden Retriever',
      longDescription: 'Buddy is a 3-year-old Golden Retriever known for his playful and friendly demeanor. He loves playing fetch and is great with kids.',
      photoUrl: 'https://www.vidavetcare.com/wp-content/uploads/sites/234/2022/04/golden-retriever-dog-breed-info.jpeg',
      location: 'New York, NY'
    },
    {
      name: 'Bella',
      ownerName: 'Jane Doe',
      description: 'A charming Beagle',
      longDescription: 'Bella is a 2-year-old Beagle with a lot of energy and a charming personality. She loves to explore and is always up for a new adventure.',
      photoUrl: 'https://cdn.britannica.com/16/234216-050-C66F8665/beagle-hound-dog.jpg',
      location: 'Los Angeles, CA'
    },
    {
      name: 'Max',
      ownerName: 'Michael Smith',
      description: 'A loyal German Shepherd',
      longDescription: 'Max is a 4-year-old German Shepherd with a loyal and protective nature. He is well-trained and serves as a great companion.',
      photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/German_Shepherd_-_DSC_0346_%2810096362833%29.jpg',
      location: 'Chicago, IL'
    },
    {
      name: 'Lucy',
      ownerName: 'Sarah Johnson',
      description: 'A playful Poodle',
      longDescription: 'Lucy is a 1-year-old Poodle who is full of energy and loves to play. She has a curly coat and requires regular grooming.',
      photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Full_attention_%288067543690%29.jpg',
      location: 'Houston, TX'
    },
    {
      name: 'Charlie',
      ownerName: 'Emily Davis',
      description: 'A gentle Labrador Retriever',
      longDescription: 'Charlie is a 5-year-old Labrador Retriever with a gentle and calm demeanor. He is great with other pets and enjoys lounging around the house.',
      photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Labrador_on_Quantock_%282175262184%29.jpg/800px-Labrador_on_Quantock_%282175262184%29.jpg',
      location: 'Phoenix, AZ'
    }
  ];


}
