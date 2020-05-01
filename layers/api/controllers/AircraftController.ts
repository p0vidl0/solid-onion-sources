import { inject } from 'inversify';
import * as express from "express";
import { controller, httpGet, response, requestParam } from 'inversify-express-utils';

import { TYPES } from 'domain/types';
import IAircraftRepository from 'domain/interfaces/IAircraftRepository';

@controller('/api/v1/aircraft')
export default class AircraftController {
  @inject(TYPES.AircraftRepository) private readonly _aircraftRepository: IAircraftRepository;

  @httpGet('/')
  public async get(@response() res: express.Response) {
    const items = await this._aircraftRepository.readAll();
    return items.map(item => item.unmarshal());
  }

  @httpGet('/:id')
  public async getOne(@response() res: express.Response, @requestParam('id') id: string) {
    const item = await this._aircraftRepository.readOneById(id);
    return item.unmarshal();
  }

  // ...

}
