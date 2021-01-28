import { Controller,Get, HttpModule, HttpService } from '@nestjs/common';
import {CarreService} from './carre.service';
@Controller('carre')
export class CarreController {
    constructor(private httpService: HttpService){}

    @Get()
    async getCarre(){
        return "Hello World";
    }
}
