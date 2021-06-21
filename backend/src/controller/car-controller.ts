import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Car } from "../entity/Car";
import { Controller } from "./controller";

export class CarController extends Controller{
    repository = getRepository(Car);
    
    getAll = async (req: Request, res: Response) =>{
        const search = req.query.search || '';
        try {
            const entities = await this.repository
                .createQueryBuilder('car')
                .where("car.gyarto LIKE CONCAT('%', :search, '%')", { search: search })
                .leftJoinAndSelect('car.uploader', 'uploader')
                .getMany();
            res.json(entities);
            
        } catch (err) {
            this.handleError(res);
        }
    }
}