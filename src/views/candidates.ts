import { Candidate } from '../services/donation-types';

export class Candidates {
  firstName: string;
  lastName: string;
  office: string;
  candidates: Candidate[] = [];

  addCandidate() {
    const candidate = {
      firstName: this.firstName,
      lastName: this.lastName,
      office: this.office
    };
    this.candidates.push(candidate);
    console.log(candidate);
  }
}

