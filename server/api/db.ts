import Knex from "knex";
import { Model } from 'objection';
import knexConfig from "./../knexfile";

const connection = Knex(knexConfig.development)

Model.knex(connection)

export default connection