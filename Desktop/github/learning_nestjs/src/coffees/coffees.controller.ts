import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { response } from 'express';

@Controller('coffees')
export class CoffeesController {
    @Get()
    findAll() {
        return 'return all coffees';
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return  'This is a result for one #${id} coffee';
    }
    
    @Post()
    @HttpCode(HttpStatus.GONE)
    create(@Body('Life') body){
        return body; 
    }
    


}
