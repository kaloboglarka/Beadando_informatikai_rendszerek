import express from 'express';
import { CarController } from './src/controller/car-controller';
import { StatusController } from './src/controller/status-controller';
import { UserController } from './src/controller/user-controller';

export function getRouter(){
    const router = express.Router();
   
    const carController = new CarController();

    router.get('/car', carController.getAll);
    router.get('/car/:id', carController.get);
    router.post('/car', carController.create);
    router.put('/car', carController.update);
    router.delete('/car/:id', carController.delete);

    const userController = new UserController();

    router.get('/users', userController.getAll);
    router.get('/users/:id', userController.get);
    router.post('/users', userController.create);
    router.put('/users', userController.update);
    router.delete('/users/:id', userController.delete);

    const statusController = new StatusController();

    router.get('/statuses', statusController.getAll);
    router.get('/statuses/:id', statusController.get);
    router.post('/statuses', statusController.create);
    router.put('/statuses', statusController.update);
    router.delete('/statuses/:id', statusController.delete);

    return router;
}