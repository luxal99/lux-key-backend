import { Controller, HttpStatus, Post, Req, Res } from "@nestjs/common";
import { ServiceKeyService } from "./service-key.service";
import { GenericController } from "../../generic/generic.controller";
import { ServiceKey } from "./ServiceKey";
import { Request, Response } from "express";

@Controller("service-key")
export class ServiceKeyController extends GenericController<ServiceKey> {
  constructor(private readonly serviceKeyService: ServiceKeyService) {
    super(serviceKeyService);
  }
}
