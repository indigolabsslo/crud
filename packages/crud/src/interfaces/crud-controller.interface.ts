import { CrudService } from '../services';
import { CrudRequest, GetManyDefaultResponse, CreateManyDto } from '../interfaces';
import { Mapper } from '@automapper/core';

export interface CrudController<T, C = T, R = T, U = T, G = T, CS = C, RS = R, US = U> {
  service: CrudService<T, CS, RS, US>;
  mapper?: Mapper;
  getManyBase?(req: CrudRequest): Promise<GetManyDefaultResponse<G> | G[]>;
  getOneBase?(req: CrudRequest): Promise<G>;
  createOneBase?(req: CrudRequest, dto: C, routeParams?: Partial<CS>): Promise<G>;
  createManyBase?(req: CrudRequest, dto: CreateManyDto<C>): Promise<G[]>;
  updateOneBase?(req: CrudRequest, dto: U, routeParams?: Partial<US>): Promise<G>;
  replaceOneBase?(req: CrudRequest, dto: R, routeParams?: Partial<RS>): Promise<G>;
  deleteOneBase?(req: CrudRequest): Promise<void | G>;
  recoverOneBase?(req: CrudRequest): Promise<void | G>;
}
