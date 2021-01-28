import { Injectable, HttpModule, HttpService} from '@nestjs/common';
import { CARRE } from './carre.mock';

@Injectable()
export class CarreService {
    constructor(private httpService: HttpService){}
  private carre = CARRE;

  public async getCarre() {
    return this.carre;
  }
}
