import { Engine } from '@zappjs/core';
import { compile } from 'handlebars';

export const HandlebarsEngine: Engine = (spec, template) => {
  return compile(template)(spec);
}